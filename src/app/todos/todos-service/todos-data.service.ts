import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodo} from "../../modules/ITodo";

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {

  private _url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this._url);
  }

}
