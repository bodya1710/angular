import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../../modules/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  private _urls = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this._urls)
  }

  getPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(this._urls + '/' + id);
  }
}
