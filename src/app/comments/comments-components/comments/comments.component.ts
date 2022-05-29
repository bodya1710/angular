import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../modules/IComment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  comments!: IComment[];

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({CommentsData}) => this.comments = CommentsData);
  }

}
