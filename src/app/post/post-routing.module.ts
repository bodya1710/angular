import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {PostsResolver} from "./post-services/posts.resolver";

const routes: Routes = [
  {path: '', component: PostsComponent,
    resolve: {PostsData: PostsResolver},
    children:[
      {path: 'post-details/:id', component: PostDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
