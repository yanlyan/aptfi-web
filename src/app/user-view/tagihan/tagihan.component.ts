import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  constructor(private tagihanService: TagihanService, private route: ActivatedRoute, private snackbar: MatSnackBar) {}

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
    });
  }

  onPayButtonClick(bill: Bill) {
    window.snap.pay(bill.token);
  }
}
