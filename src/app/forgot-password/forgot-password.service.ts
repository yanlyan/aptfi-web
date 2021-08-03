import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../core/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constructor(private httpClient: HttpClientService) {}

  sendLinkResetPassword(email:string){
    return this.httpClient.post(`${environment.api}/forgot-password`,{email});
  }
}
