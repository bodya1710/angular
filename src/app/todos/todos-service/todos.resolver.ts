import {Injectable} from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {ITodo} from "../../modules/ITodo";
import {TodosDataService} from "./todos-data.service";

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<ITodo[]> {
  constructor(private todosDataService: TodosDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> | Promise<ITodo[]> | ITodo[] {
    return this.todosDataService.getTodos();
  }
}
