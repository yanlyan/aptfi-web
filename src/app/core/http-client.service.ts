import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  headers!: HttpHeaders;

  constructor(private http: HttpClient, private store: Store) {}

  get(
    path: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    return this.http.get<any>(path, options);
  }

  download(url: string, options: any): Observable<any> {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    options.headers = headers;
    return this.http.get(url, options);
  }

  post(path: string, data: object): Observable<any> {
    return this.http.post<any>(path, data);
  }

  put(path: string, data: object): Observable<any> {
    return this.http.put<any>(path, data);
  }

  postProgress(
    path: string,
    data: object,
    options: {
      headers?: HttpHeaders;
      observe: 'events';
      reportProgress: true;
    } = {
      observe: 'events',
      reportProgress: true,
    }
  ) {
    return this.http.post(path, data, options);
  }

  delete(
    path: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
    return this.http.delete<any>(path, options);
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    const appState = this.store.selectSnapshot(AppState);

    if (appState.session?.accessToken) {
      headers.append('Authorization', appState.session.accessToken);
    } else {
    }
  }
}
