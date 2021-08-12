import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';
import { LoadingState, LoadingStateModel } from 'src/app/states/loading.state';
import { SetSessionState } from 'src/app/app.state';
import { MemberState, MemberStateModel } from '../member.state';
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

  state$: Observable<MemberStateModel> = this.store.select(MemberState).pipe();
  userState$: Observable<UserStateModel> = this.store.select(UserState).pipe();
  anggotaOpened: boolean = false;
  tagihanOpened: boolean = false;

  loadingState$: Observable<LoadingStateModel> = this.store.select(LoadingState).pipe(debounceTime(0));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly store: Store,
    private readonly router: Router
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
        this.setMenuActive();
      }
    });
    this.setMenuActive();
  }

  setMenuActive() {
    const approvalMenu = ['/dosen', '/daftar', '/profil'];

    for (const am of approvalMenu) {
      if (this.router.url.includes(am)) {
        this.anggotaOpened = true;
      }
    }
    const tagihanMenu = ['/tagihan', '/rekap-tagihan'];
    for (const am of tagihanMenu) {
      if (this.router.url.includes(am)) {
        this.tagihanOpened = true;
      }
    }

    if (this.router.url === '/') {
      this.anggotaOpened = true;
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

  onOpened(name: string) {
    // if (name === 'anggota') {
    //   this.anggotaOpened = true;
    //   this.tagihanOpened = false;
    // } else if (name === 'tagihan') {
    //   this.anggotaOpened = false;
    //   this.tagihanOpened = true;
    // }
  }
}
