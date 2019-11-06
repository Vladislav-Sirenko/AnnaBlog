import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Trip } from './trips/trip.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TripsService {
  _baseUrl: string;

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  postFile(fileToUpload: File[], id: number) {
    sessionStorage.removeItem('ID');
    const endpoint = this._baseUrl + 'api/Trip/' + id + '/UploadFile';
    const formData: FormData = new FormData();
    for (const file of fileToUpload) {
      formData.append('fileKey' + file.name, file, file.name);
    }
    return this._http.post(endpoint, formData);
    // .catch((e) => this.handleError(e));
  }
  postTrip(trip: Trip) {
    trip.id = 0;
    return this._http.post(this._baseUrl + 'api/Trip', trip);
  }
  getAll(skip: number) {
    return this._http.get<Trip[]>(this._baseUrl + 'api/Trip/' + skip);
  }
}
