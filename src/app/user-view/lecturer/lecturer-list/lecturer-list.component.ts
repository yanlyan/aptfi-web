import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { SetLoadingState } from 'src/app/admin-view/admin-loading.state';
import { LecturerService } from './lecturer.service';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.scss'],
})
export class LecturerListComponent implements OnInit {
  isLoadingResults: boolean;
  resultsLength: any;
  displayedColumns: string[] = [
    'index',
    'dosen_name',
    'dosen_nidn',
    'dosen_birth_date',
    'dosen_position',
    'dosen_expertise',
    'dosen_prodi',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('matSelect') prodiSelect: MatSelect;

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef;

  constructor(
    private cdref: ChangeDetectorRef,
    private lecturerService: LecturerService,
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
    this.prodiSelect.value = this.route.snapshot.queryParams.prodi || 's1';
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
      this.prodiSelect.valueChange
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
    return this.lecturerService
      .getAll(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction,
        this.filterInput.nativeElement.value,
        this.prodiSelect.value
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
