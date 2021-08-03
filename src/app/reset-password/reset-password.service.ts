import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../core/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  constructor(private httpClient: HttpClientService) {}

  resetPassword(params:any){
    return this.httpClient.post(`${environment.api}/reset-password`,params);
  }
}
