import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../core/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClientService) {}

  register(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    return this.httpClient.post(`${environment.api}/register`, {
      name,
      email,
      password,
      password_confirmation: passwordConfirm,
    });
  }
}
