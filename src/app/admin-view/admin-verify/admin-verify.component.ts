import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { AdminVerifyService } from './admin-verify.service';

@Component({
  selector: 'app-admin-verify',
  templateUrl: './admin-verify.component.html',
  styleUrls: ['./admin-verify.component.scss'],
})
export class AdminVerifyComponent implements OnInit, AfterViewInit {
  isLoadingResults: boolean;
  resultsLength: any;
  displayedColumns: string[] = ['university_name'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('filterInput') filterInput: ElementRef;

  constructor(private cdref: ChangeDetectorRef, private adminVerifyService: AdminVerifyService) {}

  ngOnInit() {
    this.paginator.pageIndex = 1;
    this.paginator.pageSize = 10;
    this.paginator.page.next();
  }

  ngAfterViewInit() {
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
          return this.loadData();
        })
      )
      .subscribe();
  }

  loadData() {
    return this.adminVerifyService
      .getAllMember(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction,
        this.filterInput.nativeElement.value
      )
      .pipe(
        map((data) => {
          this.resultsLength = data.total;
          console.log(data);
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
        })
      );
  }
}
