import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminTagihanService {
  constructor(private httpClient: HttpClientService) {}

  getAllBills(page: number, size: number, sortColumn: string, sortDirection: string, search: string, status: number) {
    return this.httpClient.get(`${environment.api}/bills/paginate`, {
      params: {
        page: page.toString(),
        size: size.toString(),
        orderBy: sortColumn,
        orderDirection: sortDirection,
        search,
        status: status.toString(),
      },
    });
  }
}
