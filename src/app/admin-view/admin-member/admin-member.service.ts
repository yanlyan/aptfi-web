import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminMemberService {
  constructor(private httpClient: HttpClientService) {}

  getAllMember(page: number, size: number, sortColumn: string, sortDirection: string, search: string) {
    return this.httpClient.get(`${environment.api}/members/paginate`, {
      params: {
        page: page.toString(),
        size: size.toString(),
        orderBy: sortColumn,
        orderDirection: sortDirection,
        search,
      },
    });
  }

  getDosenByUniversity(uuid: string, type: string) {
    return this.httpClient.get(`${environment.api}/dosens/by-university/${uuid}`, {
      params: {
        type,
      },
    });
  }
}
