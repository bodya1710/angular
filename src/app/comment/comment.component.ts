import {Component, Input, OnInit} from '@angular/core';
import {IComments} from "../models/IComments";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() {
  }

  @Input()
  comment!: IComments;

  ngOnInit(): void {
  }

}
