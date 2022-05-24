import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./app-components/home/home.component";



let routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'users', loadChildren:() => import('./users/users.module').then(m=>m.UsersModule) },
  {path:'posts', loadChildren:() => import('./post/post.module').then(m=>m.PostModule) },
  {path:'comments', loadChildren:() => import('./comments/comments.module').then(m=>m.CommentsModule) },
  {path:'photos', loadChildren:() => import('./photos/photos.module').then(m=>m.PhotosModule) },
  {path:'todos', loadChildren:() => import('./todos/todos.module').then(m=>m.TodosModule) },
  {path:'albums', loadChildren:() => import('./albums/albums.module').then(m=>m.AlbumsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {
}
