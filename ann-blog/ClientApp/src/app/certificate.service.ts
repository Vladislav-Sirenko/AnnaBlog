import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Certificate } from './certificate/certificate.model';

@Injectable()
export class CertificateService {

  _baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }
  getAll() {
    return this.http.get<Certificate[]>(this._baseUrl + 'api/Certificate');
  }
  remove(id: number) {
    // tslint:disable-next-line:quotemark
    return this.http.delete(this._baseUrl + "api/Certificate/" + id);
  }

  postFile(fileToUpload: File) {
    const endpoint = this._baseUrl + 'api/Certificate';
    const formData: FormData = new FormData();
    formData.append('fileKey' + fileToUpload.name, fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData);
    // .catch((e) => this.handleError(e));
  }
}
