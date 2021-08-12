import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { Member } from 'src/app/models/member.model';
import { SetLoadingState } from '../../states/loading.state';
import { PengurusMemberService } from './pengurus-member.service';

@Component({
  selector: 'app-pengurus-member',
  templateUrl: './pengurus-member.component.html',
  styleUrls: ['./pengurus-member.component.scss'],
})
export class PengurusMemberComponent implements OnInit {
  isLoadingResults: boolean;
  resultsLength: any;
  displayedColumns: string[] = ['index', 'university_name', 'faculty_name', 'prodi_name', 'status', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef;

  constructor(
    private cdref: ChangeDetectorRef,
    private pengurusMemberService: PengurusMemberService,
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
    return this.pengurusMemberService
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
          data = data.map((d: Member) => {
            d.prodi = d.prodis.filter((p) => p.prodiType === 's1')[0];
            return d;
          });
          this.dataSource.data = data.map((d: any, i: number) => {
            d.index = this.paginator.pageIndex > 0 ? i + this.paginator.pageIndex * this.paginator.pageSize + 1 : i + 1;
            return d;
          });
        })
      );
  }

  onDetailClick(member: Member) {
    this.router.navigate([`pengurus/anggota/detail/${member.uuid}`], {
      queryParams: {
        page: this.paginator.pageIndex,
        search: this.filterInput.nativeElement.value,
        size: this.paginator.pageSize,
      },
    });
  }
}
