import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TagihanService {
  constructor(private httpClient: HttpClientService) {}

  createOrder(type: string) {
    return this.httpClient.post(`${environment.api}/bills`, {
      type,
    });
  }

  getOrder() {
    return this.httpClient.get(`${environment.api}/bills`);
  }

  setToCharged(orderId: string) {
    return this.httpClient.put(`${environment.api}/payments/set-to-charged`, {
      orderId,
    });
  }
}
