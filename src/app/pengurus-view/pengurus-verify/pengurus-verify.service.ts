import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PengurusVerifyService {
  constructor(private httpClient: HttpClientService) {}

  getAllMember(page: number, size: number, sortColumn: string, sortDirection: string, search: string, status: number) {
    return this.httpClient.get(`${environment.api}/members/paginate-verify`, {
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

  getDetailMember(uuid: string = '') {
    return this.httpClient.get(`${environment.api}/members/${uuid}`);
  }

  downloadFile(uuid: string, column: string) {
    return this.httpClient.download(`${environment.api}/members/file/download/${uuid}/${column}`, {
      responseType: 'blob',
    });
  }

  verifyMember(uuid: string) {
    return this.httpClient.put(`${environment.api}/members/verify/${uuid}`, {});
  }

  rejectMember(uuid: string, reason: string) {
    return this.httpClient.put(`${environment.api}/members/reject/${uuid}`, {
      reason,
    });
  }
}
