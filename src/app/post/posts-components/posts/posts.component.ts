import {Component, OnInit} from '@angular/core';
import {PostDataService} from "../../post-services/post-data.service";
import {IPost} from "../../../modules/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: IPost[];

  constructor(private postDataService: PostDataService) {
  }

  ngOnInit(): void {
    this.postDataService.getPosts().subscribe(value => this.posts = value);
  }

}
