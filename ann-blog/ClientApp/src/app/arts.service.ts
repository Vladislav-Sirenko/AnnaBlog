import { Injectable, Inject } from '@angular/core';
import { Art } from './arts/art.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtsService {

  _baseUrl: string;

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  postFile(fileToUpload: File[], id: number) {
    sessionStorage.removeItem('ID');
    const endpoint = this._baseUrl + 'api/Art/' + id + '/UploadFile';
    const formData: FormData = new FormData();
    for (const file of fileToUpload) {
      formData.append('fileKey' + file.name, file, file.name);
    }
    return this._http.post(endpoint, formData);
  }
  postTrip(art: Art) {
    art.id = 0;
    return this._http.post(this._baseUrl + 'api/Art', art);
  }
  getAll(skip: number) {
    return this._http.get<Art[]>(this._baseUrl + 'api/Art/' + skip);
  }
  removeTrip(id: number) {
    return this._http.delete(this._baseUrl + 'api/Art/' + id);
  }
}
