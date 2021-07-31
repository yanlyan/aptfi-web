import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/core/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService {
  constructor(private httpClient: HttpClientService, private http: HttpClient) {}

  saveInstitute(data: any) {
    return this.httpClient.put(`${environment.api}/members/save-institute`, data);
  }

  saveProdi(data: any, type: string) {
    data.prodiType = type;
    return this.httpClient.put(`${environment.api}/prodis/save-prodi`, data);
  }

  downloadTemplate() {
    return this.http.get('./assets/template/template_dosen.xlsx', {
      responseType: 'blob',
    });
  }

  uploadFileDosen(data: any) {
    return this.httpClient.post(`${environment.api}/dosens/save-dosen`, data);
  }
  uploadSarpra(data: any) {
    return this.httpClient.post(`${environment.api}/members/save-sarpra`, data);
  }
}
