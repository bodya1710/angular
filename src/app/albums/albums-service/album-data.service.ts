import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAlbum} from "../../modules/IAlbum";

@Injectable({
  providedIn: 'root'
})
export class AlbumDataService {

  private _url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {
  }

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this._url);
  }
}
