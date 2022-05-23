import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../models/IComments";
import {ICommentDetail} from "../models/ICommentDetail";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _url = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComments[]> {
    return this.http.get<IComments[]>(this._url);
  }

  getComment(id: string): Observable<ICommentDetail> {
    return this.http.get<ICommentDetail>(this._url + '/' + id);
  }
}
