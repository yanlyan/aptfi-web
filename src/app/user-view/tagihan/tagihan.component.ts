import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { finalize } from 'rxjs/operators';
import { SetLoadingState } from 'src/app/states/loading.state';
import { Bill } from './bill.model';
import { TagihanService } from './tagihan.service';

declare const window: any;

@Component({
  selector: 'app-tagihan',
  templateUrl: './tagihan.component.html',
  styleUrls: ['./tagihan.component.scss'],
})
export class TagihanComponent implements OnInit {
  bills: Bill[];

  constructor(
    private tagihanService: TagihanService,
    private snackbar: MatSnackBar,
    private _FileSaverService: FileSaverService,
    private store: Store // private cdr: ChangeDetectorRef
  ) {
    this.store.dispatch(new SetLoadingState(true));
    this.getBills();
  }

  ngOnInit(): void {}

  getBills() {
    this.tagihanService
      .getOrder()
      .pipe(
        finalize(() => {
          this.store.dispatch(new SetLoadingState(false));
        })
      )
      .subscribe((response) => {
        this.bills = response.bills;
      });
  }

  onPayButtonClick(bill: Bill) {
    // check status
    this.tagihanService.check(bill.orderId).subscribe((response) => {
      this.getBills();
    });
    window.snap.pay(bill.token);
  }

  onReorderButtonClick(bill: Bill) {
    bill.loading = true;

    this.tagihanService.reorder(bill.id).subscribe(
      (response) => {
        this.getBills();
        bill.loading = false;
        this.snackbar.open('Pesan Ulang berhasil, silakan klik Bayar Sekarang', null, { duration: 2000 });
      },
      (err) => {
        bill.loading = false;
      }
    );
  }

  onPrintClick(bill: Bill) {
    bill.loading = true;
    this.tagihanService.printReceipt(bill.token).subscribe(
      (response) => {
        this._FileSaverService.save(response, 'Bukti Pembayaran.pdf', 'pdf');
        bill.loading = false;
      },

      (err) => {
        bill.loading = false;
      }
    );
  }

  onRetryClick(bill: Bill) {
    bill.loading = true;
    this.tagihanService.retry(bill.token).subscribe(
      (response) => {
        window.snap.pay(response.bill.token, {
          onClose: () => {
            this.getBills();
          },
        });
        bill.loading = false;
      },
      (err) => {
        bill.loading = false;
      }
    );
  }
}
