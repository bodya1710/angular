import {Component, OnInit} from '@angular/core';
import {IPhoto} from "../../../modules/IPhoto";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos!: IPhoto[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({PhotosData}) => this.photos = PhotosData);

  }

}
