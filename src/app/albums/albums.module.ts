import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums-components/albums/albums.component';
import {HttpClientModule} from "@angular/common/http";
import {AlbumDataService} from "./albums-service/album-data.service";
import { AlbumComponent } from './albums-components/album/album.component';


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule
  ],
  providers: [AlbumDataService]
})
export class AlbumsModule { }
