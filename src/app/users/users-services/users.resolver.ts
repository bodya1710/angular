import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IUsers} from "../../modules/IUsers";
import {UserDataService} from "./user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUsers[]> {

  constructor(private userService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUsers[]> | Promise<IUsers[]> | IUsers[] {
    return this.userService.getUsers();
  }
}

