import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../models/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this._url);
  }

}
