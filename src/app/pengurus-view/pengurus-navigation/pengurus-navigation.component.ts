import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SetSessionState } from 'src/app/app.state';
import { UserState, UserStateModel } from 'src/app/user-view/user.state';
import { LoadingStateModel, LoadingState } from '../../states/loading.state';

@Component({
  selector: 'app-pengurus-navigation',
  templateUrl: './pengurus-navigation.component.html',
  styleUrls: ['./pengurus-navigation.component.scss'],
})
export class PengurusNavigationComponent implements OnInit {
  state$: Observable<UserStateModel>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  approvalOpened: boolean = false;
  tagihanOpened: boolean = false;
  anggotaOpened: boolean = false;

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
    const anggotaMenu = ['/pengurus/anggota', '/pengurus/dosen'];
    for (const am of anggotaMenu) {
      if (this.router.url.includes(am)) {
        this.anggotaOpened = true;
      }
    }
    const approvalMenu = ['/pengurus/verify', '/pengurus/sk-member'];
    for (const am of approvalMenu) {
      if (this.router.url.includes(am)) {
        this.approvalOpened = true;
      }
    }
    const tagihanMenu = ['/pengurus/tagihan'];
    for (const am of tagihanMenu) {
      if (this.router.url.includes(am)) {
        this.tagihanOpened = true;
      }
    }

    this.state$ = this.store.select(UserState);
  }
  onOpened(name: string) {
    if (name === 'approval') {
      this.approvalOpened = true;
      this.tagihanOpened = false;
      this.anggotaOpened = false;
    } else if (name === 'tagihan') {
      this.approvalOpened = false;
      this.tagihanOpened = true;
      this.anggotaOpened = false;
    } else if (name === 'anggota') {
      this.approvalOpened = false;
      this.tagihanOpened = false;
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
}
