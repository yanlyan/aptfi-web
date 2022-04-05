import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { merge, fromEvent } from 'rxjs';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { Bill } from 'src/app/user-view/tagihan/bill.model';
import { TagihanService } from 'src/app/user-view/tagihan/tagihan.service';
import { SetLoadingState } from '../../states/loading.state';
import { PengurusTagihanService } from './pengurus-tagihan.service';

@Component({
  selector: 'app-pengurus-tagihan',
  templateUrl: './pengurus-tagihan.component.html',
  styleUrls: ['./pengurus-tagihan.component.scss'],
})
export class PengurusTagihanComponent implements OnInit {
  isLoadingResults: boolean;
  resultsLength: any;
  displayedColumns: string[] = [
    'index',
    'members.university_name',
    'type',
    'month',
    'amount',
    'last_status',
    'invoice',
    'receipt',
    'action',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('matSelect') statusSelect: MatSelect;

  @ViewChild('filterInput', { static: true }) filterInput: ElementRef;

  constructor(
    private cdref: ChangeDetectorRef,
    private pengurusTagihanService: PengurusTagihanService,
    private tagihanService: TagihanService,
    private store: Store,
    private route: ActivatedRoute,
    private _FileSaverService: FileSaverService,
    private datepipe: DatePipe,
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
    this.statusSelect.value = this.route.snapshot.queryParams.status || '';

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
    return this.pengurusTagihanService
      .getAllBills(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction,
        this.filterInput.nativeElement.value,
        this.statusSelect.value,
        'false'
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

  downloadInvoice(bill: Bill) {
    bill.loading = true;
    this.tagihanService.printInvoice(bill.token).subscribe(
      (response) => {
        this._FileSaverService.save(
          response,
          `Tagihan ${bill.universityName} ${this.datepipe.transform(bill.lastStatusAt, 'd MMMM y')} .pdf`,
          'pdf'
        );
        bill.loading = false;
      },
      (err) => {
        bill.loading = false;
      }
    );
  }

  downloadReceipt(bill: Bill) {
    bill.loading = true;
    this.tagihanService.printReceipt(bill.token).subscribe(
      (response) => {
        this._FileSaverService.save(
          response,
          `Bukti Pembayaran ${bill.universityName} ${this.datepipe.transform(bill.lastStatusAt, 'd MMMM y')} .pdf`,
          'pdf'
        );
        bill.loading = false;
      },
      (err) => {
        bill.loading = false;
      }
    );
  }

  delete(bill: Bill) {
    console.log(bill);
    this.dialog
      .open(ConfirmDialogComponent, {
        closeOnNavigation: false,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.pengurusTagihanService.deleteBill(bill.id).subscribe((response) => {
            this.snackbar.open('Hapus tagihan berhasil', '', {
              panelClass: ['snackbar-success'],
              duration: 5000,
            });
            this.loadData().subscribe();
          });
        }
      });
  }
}
