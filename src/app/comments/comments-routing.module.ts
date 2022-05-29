import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentsResolver} from "./comments-services/comments.resolver";

const routes: Routes = [
  {path: '', component: CommentsComponent , resolve: {CommentsData : CommentsResolver}  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
