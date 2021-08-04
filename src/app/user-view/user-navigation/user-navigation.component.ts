import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SetSessionState } from 'src/app/app.state';
import { UserState, UserStateModel } from '../user.state';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss'],
})
export class UserNavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  state$: Observable<UserStateModel> = this.store.select(UserState);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly store: Store,
    private readonly router: Router,
    private viewPortScroller: ViewportScroller
  ) {}
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
