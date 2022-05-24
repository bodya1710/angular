import {Component, OnInit} from '@angular/core';
import {PhotoDataService} from "../../photos-service/photo-data.service";
import {IPhoto} from "../../../modules/IPhoto";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos!: IPhoto[];

  constructor(private photoDataService: PhotoDataService) {
  }

  ngOnInit(): void {
    this.photoDataService.getPhotos().subscribe(value => this.photos = value);
  }

}
