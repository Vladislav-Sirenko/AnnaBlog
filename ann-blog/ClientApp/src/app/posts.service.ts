import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts/post.model';

@Injectable()
export class PostsService {

  _baseUrl: string;

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }
  removeTrip(id: number) {
    return this._http.delete(this._baseUrl + 'api/Post/' + id);
  }

  postTrip(post: Post) {
    post.id = 0;
    return this._http.post(this._baseUrl + 'api/Post', post);
  }
  getAll(skip: number) {
    return this._http.get<Post[]>(this._baseUrl + 'api/Post/' + skip);
  }

}
