import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { Store } from '@ngxs/store';
import { AppStateModel, AppState } from '../app.state';
import { map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(
    private readonly store: Store,
    private readonly snackbar: MatSnackBar
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const appState: AppStateModel = this.store.selectSnapshot(AppState);
    const token = appState.session ? appState.session.accessToken : null;
    if (token) {
      let tokenizedRequest = req;
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token,
      });
      tokenizedRequest = req.clone({
        headers,
      });
      return next.handle(tokenizedRequest).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
    } else {
      return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          this.snackbar.open(
            `Terjadi Kesalahan : ${error.error.message}`,
            'Tutup',
            {
              panelClass: ['snackbar-warn'],
            }
          );
          return throwError(error);
        })
      );
    }
  }
}
