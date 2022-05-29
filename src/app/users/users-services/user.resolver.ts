import {Injectable} from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserDataService} from "./user-data.service";
import {IUsers} from "../../modules/IUsers";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUsers> {
  constructor(private userService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUsers> | Promise<IUsers> | IUsers {
    let id = route.params['id'];
    return this.userService.getUser(id);
  }
}
