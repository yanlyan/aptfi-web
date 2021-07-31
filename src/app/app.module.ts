import { NgModule } from '@angular/core';
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

export function tokenGetter() {
  return '';
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    LayoutModule,
    NgxsModule.forRoot([AppState, UserState], {
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
      deps: [Store, MatSnackBar],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
