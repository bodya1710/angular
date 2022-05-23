import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../models/IPosts";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() {
  }

  @Input()
  post!: IPosts;

  ngOnInit(): void {
  }

}
