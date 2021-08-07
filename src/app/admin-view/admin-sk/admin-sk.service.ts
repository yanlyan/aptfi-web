import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientService } from 'src/app/core/http-client.service';
import { Member } from 'src/app/user-view/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminSKService {
  constructor(private httpClient: HttpClientService) {}

  search(keyword: string): Observable<Member[]> {
    return this.httpClient.get(`${environment.api}/members/search/${keyword}`).pipe(map((data) => data.data));
  }
}
