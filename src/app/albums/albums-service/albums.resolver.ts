import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IAlbum} from "../../modules/IAlbum";
import {AlbumDataService} from "./album-data.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<IAlbum[]> {
  constructor(private albumDataService: AlbumDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlbum[]> | Promise<IAlbum[]> | IAlbum[] {
    return this.albumDataService.getAlbums();
  }
}
