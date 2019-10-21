import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackModel } from './feedbackModel.model';

@Injectable()
export class ContactService {
  _baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  sendFeedback(model: FeedbackModel) {
    return this.http.post(this._baseUrl + 'api/Feedbacks', model);
  }
}
