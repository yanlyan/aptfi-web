import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';
import { Bill } from './bill.model';

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
    return this.httpClient.get(`${environment.api}/bills`).pipe(
      map((response) => {
        response.bills.map((b: Bill) => {
          b.isExpired = new Date(b.expiredDate).getTime() <= Date.now();
        });
        return response;
      })
    );
  }

  check(orderId: string) {
    return this.httpClient.get(`${environment.api}/bills/check/${orderId}`);
  }

  retry(token: string) {
    return this.httpClient.put(`${environment.api}/bills/retry/${token}`, {});
  }

  printInvoice(token: string) {
    return this.httpClient.download(`${environment.api}/bills/print-invoice/${token}`, { responseType: 'blob' });
  }

  printReceipt(token: string) {
    return this.httpClient.download(`${environment.api}/bills/print/${token}`, { responseType: 'blob' });
  }

  reorder(id: number) {
    return this.httpClient.put(`${environment.api}/bills/reorder/${id}`, {});
  }
}
