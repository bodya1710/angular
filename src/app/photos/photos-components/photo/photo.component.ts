import {Component, Input, OnInit} from '@angular/core';
import {IPhoto} from "../../../modules/IPhoto";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() {
  }

  @Input()
  photo!: IPhoto;

  ngOnInit(): void {
  }

}
