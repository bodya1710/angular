import {Component, OnInit} from '@angular/core';
import {AlbumDataService} from "../../albums-service/album-data.service";
import {IAlbum} from "../../../modules/IAlbum";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: IAlbum[];

  constructor(private albumDataService: AlbumDataService) {
  }

  ngOnInit(): void {
    this.albumDataService.getAlbums().subscribe(value => this.albums = value);
  }

}
