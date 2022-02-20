import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './app.state';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MyHttpInterceptor } from './core/http-interceptor';
import { UserState } from './user-view/user.state';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';
import { ReCaptchaModule } from 'angular-recaptcha3';
import { LoadingState } from './states/loading.state';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberState } from './user-view/member.state';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

registerLocaleData(localeId, 'id');

export function tokenGetter() {
  return '';
}

@NgModule({
  declarations: [AppComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    NgxExtendedPdfViewerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    LayoutModule,
    NgxsModule.forRoot([AppState, UserState, MemberState, LoadingState], {
      developmentMode: !environment.production,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['app'],
    }),
    ReCaptchaModule.forRoot({
      invisible: {
        sitekey: environment.recaptchaSiteKey,
      },
      normal: {
        sitekey: environment.recaptchaSiteKey,
      },
      language: 'id',
    }),
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
      deps: [Store, MatSnackBar],
    },
    { provide: LOCALE_ID, useValue: 'id-ID' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
