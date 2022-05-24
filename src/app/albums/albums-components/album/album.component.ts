import {Component, Input, OnInit} from '@angular/core';
import {IAlbum} from "../../../modules/IAlbum";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor() {
  }

  @Input()
  album!: IAlbum;

  ngOnInit(): void {
  }

}
