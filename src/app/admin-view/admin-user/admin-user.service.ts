import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  constructor(private httpClient: HttpClientService) {}

  getRoles() {
    return this.httpClient.get(`${environment.api}/roles`);
  }

  getUser(id: bigint) {
    return this.httpClient.get(`${environment.api}/users/${id}`);
  }

  getPaginateUsers(
    page: number,
    size: number,
    sortColumn: string,
    sortDirection: string,
    search: string,
    role: string
  ) {
    return this.httpClient.get(`${environment.api}/users/paginate`, {
      params: {
        page: page.toString(),
        size: size.toString(),
        orderBy: sortColumn,
        orderDirection: sortDirection,
        search,
        role: role || '',
      },
    });
  }

  create(user: any) {
    return this.httpClient.post(`${environment.api}/users`, { ...user });
  }

  update(user: any) {
    return this.httpClient.put(`${environment.api}/users/${user.id}`, { ...user });
  }

  delete(id: bigint) {
    return this.httpClient.delete(`${environment.api}/users/${id}`);
  }
}
