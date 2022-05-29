import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IPost} from "../../modules/IPost";
import {PostDataService} from "./post-data.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {
  constructor(private postDataService: PostDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postDataService.getPosts();
  }
}
