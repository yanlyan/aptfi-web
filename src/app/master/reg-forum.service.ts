import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../core/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class RegForumService {
  constructor(private httpClient: HttpClientService) {}

  getAll() {
    return this.httpClient.get(`${environment.api}/forums`);
  }
}
