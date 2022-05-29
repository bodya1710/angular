import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos-components/photos/photos.component';
import {PhotoDataService} from "./photos-service/photo-data.service";
import {HttpClientModule} from "@angular/common/http";
import {PhotoComponent} from './photos-components/photo/photo.component';
import {PhotosResolver} from "./photos-service/photos.resolver";


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    HttpClientModule
  ],
  providers: [PhotoDataService, PhotosResolver]
})
export class PhotosModule {
}
