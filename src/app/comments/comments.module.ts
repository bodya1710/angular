import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments-components/comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentDataService} from "./comments-services/comment-data.service";
import {CommentComponent} from './comments-components/comment/comment.component';
import {CommentsResolver} from "./comments-services/comments.resolver";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [CommentDataService, CommentsResolver]
})
export class CommentsModule {
}
