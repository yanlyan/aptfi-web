import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { Member } from 'src/app/user-view/user.model';
import { SetLoadingState } from '../admin-loading.state';
import { AdminVerifyService } from './admin-verify.service';

@Component({
  selector: 'app-admin-verify',
  templateUrl: './admin-verify.component.html',
  styleUrls: ['./admin-verify.component.scss'],
})
export class AdminVerifyComponent implements OnInit, AfterViewInit {
  isLoadingResults: boolean;
  resultsLength: any;
  displayedColumns: string[] = [
    'index',
    'university_name',
    'created_at',
    'register_paid',
    'annual_paid',
    'document',
    'action',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef;

  constructor(
    private cdref: ChangeDetectorRef,
    private adminVerifyService: AdminVerifyService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.store.dispatch(new SetLoadingState(true));
  }

  ngOnInit() {
    this.paginator.pageIndex = this.route.snapshot.queryParams.page || 0;
    this.paginator.pageSize = this.route.snapshot.queryParams.size || 10;
    this.paginator.page.next();
  }

  ngAfterViewInit() {
    this.filterInput.nativeElement.value = this.route.snapshot.queryParams.search || '';
    this.sort.sort({
      id: 'university_name',
      start: 'asc',
      disableClear: false,
    });
    this.cdref.detectChanges();

    merge(this.sort.sortChange, this.paginator.page, fromEvent(this.filterInput.nativeElement, 'keyup'))
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        startWith({}),
        switchMap(() => {
          this.store.dispatch(new SetLoadingState(true));
          return this.loadData();
        })
      )
      .subscribe();
  }

  loadData() {
    return this.adminVerifyService
      .getAllMember(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction,
        this.filterInput.nativeElement.value
      )
      .pipe(
        map((data) => {
          this.resultsLength = data.pagination.length;
          return data.data;
        }),
        map((data) => {
          setTimeout(() => {
            this.filterInput.nativeElement.focus();
          }, 500);
          this.store.dispatch(new SetLoadingState(false));
          this.dataSource.data = data.map((d: any, i: number) => {
            d.index = this.paginator.pageIndex > 0 ? i + this.paginator.pageIndex * this.paginator.pageSize + 1 : i + 1;
            return d;
          });
        })
      );
  }

  onVerifyClick(member: Member) {
    this.store.dispatch(new SetLoadingState(true));
    this.adminVerifyService.verifyMember(member.uuid).subscribe(
      () => {
        this.store.dispatch(new SetLoadingState(false));
        this.loadData().subscribe();
      },
      (err) => {
        this.store.dispatch(new SetLoadingState(false));
      }
    );
  }

  onDetailClick(member: Member) {
    this.router.navigate([`admin/verify/detail/${member.uuid}`], {
      queryParams: {
        page: this.paginator.pageIndex,
        search: this.filterInput.nativeElement.value,
        size: this.paginator.pageSize,
      },
    });
  }
}
