import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { SetLoadingState } from 'src/app/admin-view/admin-loading.state';
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
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private _FileSaverService: FileSaverService,
    private store: Store
  ) {
    this.store.dispatch(new SetLoadingState(true));
  }

  ngOnInit(): void {
    this.getBills();
  }

  getBills() {
    this.store.dispatch(new SetLoadingState(true));
    this.tagihanService.getOrder().subscribe((response) => {
      this.bills = response.bills;
      this.store.dispatch(new SetLoadingState(false));
    });
  }

  onPayButtonClick(bill: Bill) {
    window.snap.pay(bill.token);
  }

  onPrintClick(bill: Bill) {
    bill.loading = true;
    this.tagihanService.print(bill.token).subscribe(
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
