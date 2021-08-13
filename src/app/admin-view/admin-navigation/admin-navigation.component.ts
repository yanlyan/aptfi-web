import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { SetSessionState } from 'src/app/app.state';
import { UserState, UserStateModel } from 'src/app/user-view/user.state';
import { LoadingStateModel, LoadingState } from '../../states/loading.state';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss'],
})
export class AdminNavigationComponent implements OnInit {
  state$: Observable<UserStateModel>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  masterOpened: boolean = false;

  loadingState$: Observable<LoadingStateModel> = this.store.select(LoadingState);

  constructor(private breakpointObserver: BreakpointObserver, private store: Store, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const scrollto = document.querySelector('.mat-sidenav-content');
        if (scrollto) {
          document.querySelector('.mat-sidenav-content').scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      }
    });
    const masterMenu = ['/admin/users', '/admin/roles'];
    for (const am of masterMenu) {
      if (this.router.url.includes(am)) {
        this.masterOpened = true;
      }
    }
    this.state$ = this.store.select(UserState);
  }
  onOpened(name: string) {
    if (name === 'master') {
      this.masterOpened = true;
    }
  }
  logout() {
    this.store.dispatch(
      new SetSessionState({
        accessToken: '',
        refreshToken: '',
        role: null,
      })
    );
    this.router.navigate(['/login']);
  }
}
