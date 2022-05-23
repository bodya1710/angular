import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../services/comment.service";
import {ICommentDetail} from "../models/ICommentDetail";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentObj!: ICommentDetail;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getComment(id).subscribe(value => this.commentObj = value);

    })

  }

}
