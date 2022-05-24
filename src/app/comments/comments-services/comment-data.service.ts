import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../../modules/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentDataService {

  private _url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]>{
    return this.http.get<IComment[]>(this._url);
  }
}
