import {Component, OnInit} from '@angular/core';
import {IAlbum} from "../../../modules/IAlbum";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: IAlbum[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({AlbumsData}) => this.albums = AlbumsData);
  }

}
