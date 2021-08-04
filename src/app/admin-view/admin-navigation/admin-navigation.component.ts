import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, mergeMap, shareReplay } from 'rxjs/operators';
import { SetSessionState } from 'src/app/app.state';
import { UserState, UserStateModel } from 'src/app/user-view/user.state';

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

  approvalOpened: boolean;
  tagihanOpened: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (['/admin/verify'].includes(this.router.url)) {
      this.approvalOpened = true;
    } else if (['/admin/tagihan'].includes(this.router.url)) {
      this.tagihanOpened = true;
    }

    this.state$ = this.store.select(UserState);
  }
  onOpened(name: string) {
    if (name === 'approval') {
      this.approvalOpened = true;
      this.tagihanOpened = false;
    } else if (name === 'tagihan') {
      this.approvalOpened = false;
      this.tagihanOpened = true;
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
