import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./users-components/users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {UserDataService} from "./users-services/user-data.service";
import {UserComponent} from './users-components/user/user.component';
import {UserDetailsComponent} from './users-components/user-details/user-details.component';
import {UsersResolver} from "./users-services/users.resolver";
import {UserResolver} from "./users-services/user.resolver";
import {UserGuard} from "./guards/user.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserDataService, UsersResolver, UserResolver, UserGuard]
})
export class UsersModule {
}
