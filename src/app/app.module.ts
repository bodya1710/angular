import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {CommentsComponent} from './comments/comments.component';
import {CommentComponent} from './comment/comment.component';
import {CommentDetailsComponent} from './comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomeComponent},
      {
        path: 'user-page',
        component: UsersComponent,
        children: [
          {path: 'user-details/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'post-page',
        component: PostsComponent,
        children: [
          {path: 'post-details/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comment-page',
        component: CommentsComponent,
        children: [
          {path: 'comment-details/:id', component: CommentDetailsComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
