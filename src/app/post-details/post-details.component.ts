import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPostDetail} from "../models/IPostDetail";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {


  postDetailObj!: IPostDetail;

  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
        let {state: {data}} = history;
        this.postDetailObj = data;

      }
    );
  }

}
