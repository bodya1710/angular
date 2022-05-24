import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../modules/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input()
  post!: IPost;

  ngOnInit(): void {
  }

}
