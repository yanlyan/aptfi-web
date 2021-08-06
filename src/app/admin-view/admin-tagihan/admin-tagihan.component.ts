import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { SetLoadingState } from '../admin-loading.state';
import { AdminTagihanService } from './admin-tagihan.service';

@Component({
  selector: 'app-admin-tagihan',
  templateUrl: './admin-tagihan.component.html',
  styleUrls: ['./admin-tagihan.component.scss'],
})
export class AdminTagihanComponent implements OnInit {
  isLoadingResults: boolean;
  resultsLength: any;
  displayedColumns: string[] = ['index', 'members.university_name', 'type', 'amount', 'last_status', 'receipt'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('matSelect') statusSelect: MatSelect;

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef;

  constructor(
    private cdref: ChangeDetectorRef,
    private adminTagihanService: AdminTagihanService,
    private store: Store,
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
    this.statusSelect.value = this.route.snapshot.queryParams.status || 0;

    this.filterInput.nativeElement.value = this.route.snapshot.queryParams.search || '';
    this.sort.sort({
      id: 'id',
      start: 'asc',
      disableClear: false,
    });
    this.cdref.detectChanges();

    merge(
      this.sort.sortChange,
      this.paginator.page,
      fromEvent(this.filterInput.nativeElement, 'keyup'),
      this.statusSelect.valueChange
    )
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
    return this.adminTagihanService
      .getAllBills(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction,
        this.filterInput.nativeElement.value,
        this.statusSelect.value
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
          this.dataSource.data = data.map((d: any, i: number) => {
            d.index = this.paginator.pageIndex > 0 ? i + this.paginator.pageIndex * this.paginator.pageSize + 1 : i + 1;
            return d;
          });
          this.store.dispatch(new SetLoadingState(false));
        })
      );
  }
}
