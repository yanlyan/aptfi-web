import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FileSaverService } from 'ngx-filesaver';
import { SetLoadingState } from 'src/app/admin-view/admin-loading.state';
import { Bill } from './tagihan.model';
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

    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'finish') {
        this.snackbar.open('Harap segera lunasi pembayaran anda', '', {
          duration: 2000,
          panelClass: ['snackbar-success'],
        });
        this.getBills();
      }
    });
  }

  getBills() {
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
}
