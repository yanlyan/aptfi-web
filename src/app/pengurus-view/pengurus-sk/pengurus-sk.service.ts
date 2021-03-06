import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientService } from 'src/app/core/http-client.service';
import { Member } from 'src/app/models/member.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PengurusSKService {
  constructor(private httpClient: HttpClientService) {}

  search(keyword: string): Observable<Member[]> {
    return this.httpClient.get(`${environment.api}/members/search/${keyword}`).pipe(map((data) => data.data));
  }

  generateSK(uuid: string) {
    return this.httpClient.put(`${environment.api}/members/sk/${uuid}`, {});
  }

  downloadSK(uuid: string) {
    return this.httpClient.download(`${environment.api}/members/sk/${uuid}`, { responseType: 'blob' });
  }

  getMember(uuid: string) {
    return this.httpClient.get(`${environment.api}/members/${uuid}`);
  }
}
