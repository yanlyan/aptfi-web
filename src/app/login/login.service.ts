import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../core/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClientService) {}

  login(email: string, password: string, token: string) {
    return this.httpClient.post(`${environment.api}/login`, {
      email,
      password,
      recaptcha: token
    });
  }
}
