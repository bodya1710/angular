import { Component, OnInit } from '@angular/core';
import {CommentDataService} from "../../comments-services/comment-data.service";
import {IComment} from "../../../modules/IComment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentDataService: CommentDataService) { }

  comments!: IComment[];

  ngOnInit(): void {
    this.commentDataService.getComments().subscribe(value => this.comments = value);
  }

}
