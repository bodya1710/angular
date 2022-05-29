import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {IPhoto} from "../../modules/IPhoto";
import {PhotoDataService} from "./photo-data.service";

@Injectable({
  providedIn: 'root'
})
export class PhotosResolver implements Resolve<IPhoto[]> {
  constructor(private photoDataService: PhotoDataService) {
  }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhoto[]> | Promise<IPhoto[]> | IPhoto[] {
  return this.photoDataService.getPhotos();
}
}
