import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminViewModel } from './registration/adminViewModel.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  _baseUrl: string;

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }
  auth(email: string, password: string) {
    return this._http.post(this._baseUrl + 'api/Users', new AdminViewModel(email, password));
  }
  checkAdmin() {
    const model = new AdminViewModel(localStorage.getItem('email'), localStorage.getItem('password'));
    return this._http.post<boolean>(this._baseUrl + 'api/Users', model);
  }

}
