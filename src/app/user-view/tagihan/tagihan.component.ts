import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { tap, finalize } from 'rxjs/operators';
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
    private _FileSaverService: FileSaverService,
    private store: Store
  ) // private cdr: ChangeDetectorRef
  {
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
