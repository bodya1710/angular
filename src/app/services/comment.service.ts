import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {HttpClient} from "@angular/common/http";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private  http: HttpClient) { }

  getComments(): Observable <IComment[]>{
    return this.http
      .get<any[]>(this.url)

  }
}
