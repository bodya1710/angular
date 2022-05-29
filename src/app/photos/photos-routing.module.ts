import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from "./photos-components/photos/photos.component";
import {PhotosResolver} from "./photos-service/photos.resolver";

const routes: Routes = [
  {path: '', component: PhotosComponent, resolve: {PhotosData: PhotosResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {
}
