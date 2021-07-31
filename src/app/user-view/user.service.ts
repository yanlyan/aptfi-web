import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../core/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClientService) {}

  getById(id: bigint) {
    return this.httpClient.get(`${environment.api}/users/${id}`);
  }
}
