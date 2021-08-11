import { ChangeDetectorRef, ElementRef, Inject } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { Member } from 'src/app/user-view/user.model';
import { SetLoadingState } from '../admin-loading.state';
import { AdminVerifyService } from './admin-verify.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  @ViewChild('matSelect') statusSelect: MatSelect;

  constructor(
    private cdref: ChangeDetectorRef,
    private adminVerifyService: AdminVerifyService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.store.dispatch(new SetLoadingState(true));
  }

  ngOnInit() {
    this.paginator.pageIndex = this.route.snapshot.queryParams.page || 0;
    this.paginator.pageSize = this.route.snapshot.queryParams.size || 10;
    this.paginator.page.next();
  }

  ngAfterViewInit() {
    this.statusSelect.value = this.route.snapshot.queryParams.status || '';

    this.filterInput.nativeElement.value = this.route.snapshot.queryParams.search || '';
    this.sort.sort({
      id: 'university_name',
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
    return this.adminVerifyService
      .getAllMember(
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
          this.store.dispatch(new SetLoadingState(false));
          this.dataSource.data = data.map((d: any, i: number) => {
            d.index = this.paginator.pageIndex > 0 ? i + this.paginator.pageIndex * this.paginator.pageSize + 1 : i + 1;
            return d;
          });
        })
      );
  }

  onVerifyClick(member: Member) {
    this.dialog
      .open(DialogConfirmVerify, {
        width: '320px',
        data: {
          member: member,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.store.dispatch(new SetLoadingState(true));
          this.adminVerifyService.verifyMember(member.uuid).subscribe(
            () => {
              this.store.dispatch(new SetLoadingState(false));
              this.snackbar
                .open('Verifikasi berhasil', 'Buat SK', {
                  panelClass: 'snackbar-success',
                  duration: 5000,
                })
                .afterDismissed()
                .subscribe((value) => {
                  if (value) {
                    this.router.navigate(['admin/sk-member'], {
                      queryParams: {
                        member: member.uuid,
                      },
                    });
                  }
                });
              this.loadData().subscribe();
            },
            (err) => {
              this.store.dispatch(new SetLoadingState(false));
            }
          );
        }
      });
  }

  onRejectClick(member: Member) {
    this.dialog
      .open(DialogReject, {
        width: '320px',
        data: {
          member,
          type: 'reject',
        },
        closeOnNavigation: false,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.snackbar.open('Penolakan pendaftaran berhasil', 'Tutup', {
            panelClass: 'snackbar-success',
            duration: 5000,
          });
          this.loadData().subscribe();
        }
      });
  }

  onDetailClick(member: Member) {
    this.router.navigate([`admin/verify/detail/${member.uuid}`], {
      queryParams: {
        page: this.paginator.pageIndex,
        origin: 'verify',
        search: this.filterInput.nativeElement.value,
        size: this.paginator.pageSize,
      },
    });
  }
}

@Component({
  selector: 'dialog-confirm-verify',
  templateUrl: './dialog-confirm-verify.html',
})
export class DialogConfirmVerify {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmVerify>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  goToSK() {
    this.router.navigate(['admin/sk-member']);
  }
}

@Component({
  selector: 'dialog-reject',
  templateUrl: './dialog-reject.html',
})
export class DialogReject implements OnInit {
  rejectForm: FormGroup;
  loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogReject>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminVerifyService: AdminVerifyService
  ) {}
  ngOnInit(): void {
    this.rejectForm = new FormGroup({
      reason: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.rejectForm.valid) {
      this.loading = true;
      this.adminVerifyService.rejectMember(this.data.member.uuid, this.rejectForm.value.reason).subscribe(
        () => {
          this.dialogRef.close(true);
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }
}
