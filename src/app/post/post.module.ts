import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostDataService} from "./post-services/post-data.service";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './posts-components/post/post.component';
import { PostDetailsComponent } from './posts-components/post-details/post-details.component';
import {PostsResolver} from "./post-services/posts.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostDataService, PostsResolver]
})
export class PostModule {
}
