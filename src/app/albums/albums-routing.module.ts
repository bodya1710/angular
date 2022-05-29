import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumsComponent} from "./albums-components/albums/albums.component";
import {AlbumsResolver} from "./albums-service/albums.resolver";

const routes: Routes = [
  {path: '', component: AlbumsComponent, resolve: {AlbumsData: AlbumsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
