import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LecturerService {
  constructor(private httpClient: HttpClientService) {}

  getAll(
    page: number,
    size: number,
    sortColumn: string,
    sortDirection: string,
    search: string,
    type: string,
    mine: string
  ) {
    return this.httpClient.get(`${environment.api}/dosens/paginate`, {
      params: {
        page: page.toString(),
        size: size.toString(),
        orderBy: sortColumn,
        orderDirection: sortDirection,
        search,
        type: type || '',
        mine: mine || 'false',
      },
    });
  }
}
