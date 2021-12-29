import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, tap, map, finalize } from 'rxjs/operators';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { SetLoadingState } from 'src/app/states/loading.state';
import { AdminUserService } from '../admin-user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss'],
})
export class AdminUserListComponent implements OnInit {
  isLoadingResults: boolean;
  resultsLength: any;
  displayedColumns: string[] = ['index', 'name', 'email', 'email_verified_at', 'role', 'action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('matSelect') roleSelect: MatSelect;

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef;
  roles: Role[];

  constructor(
    private cdref: ChangeDetectorRef,
    private adminUserService: AdminUserService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.store.dispatch(new SetLoadingState(true));
  }

  ngOnInit() {
    this.paginator.pageIndex = this.route.snapshot.queryParams.page || 0;
    this.paginator.pageSize = this.route.snapshot.queryParams.size || 10;
    this.paginator.page.next(null);
  }

  ngAfterViewInit() {
    this.getRoles().subscribe(() => {
      this.roleSelect.value = this.route.snapshot.queryParams.role
        ? parseInt(this.route.snapshot.queryParams.role)
        : '';
    });
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
      this.roleSelect.valueChange
    )
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

  getRoles() {
    return this.adminUserService.getRoles().pipe(
      map((response) => {
        this.roles = response.roles;
      })
    );
  }

  loadData() {
    return this.adminUserService
      .getPaginateUsers(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction,
        this.filterInput.nativeElement.value,
        this.roleSelect.value
      )
      .pipe(
        tap(() => {
          this.store.dispatch(new SetLoadingState(true));
        }),

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
        }),
        finalize(() => {
          this.store.dispatch(new SetLoadingState(false));
        })
      );
  }
  add() {
    this.router.navigate(['admin/users/add']);
  }
  edit(user: User) {
    this.router.navigate([`admin/users/edit/${user.id}`], {
      queryParams: {
        page: this.paginator.pageIndex,
        size: this.paginator.pageSize,
        role: this.roleSelect.value,
        search: this.filterInput.nativeElement.value,
      },
    });
  }

  delete(user: User) {
    this.dialog
      .open(ConfirmDialogComponent, {
        closeOnNavigation: false,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((resp) => {
        if (resp) {
          this.adminUserService.delete(user.id).subscribe((result) => {
            this.snackbar.open('Hapus user berhasil', '', {
              panelClass: ['snackbar-success'],
              duration: 5000,
            });
            this.loadData().subscribe();
          });
        }
      });
  }
}
