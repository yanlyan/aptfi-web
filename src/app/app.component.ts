import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AppLoadingService } from './app-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Asosiasi Perguruan Tinggi Farmasi Indonesia';
  appLoading: boolean = false;
  constructor(private loadingService: AppLoadingService, private router: Router) {}
  ngOnInit(): void {
    this.loadingService.getLoading().subscribe((loading) => {
      this.appLoading = loading;
    });
  }
}
