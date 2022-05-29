import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UsersResolver} from "./users-services/users.resolver";
import {UserResolver} from "./users-services/user.resolver";
import {UserGuard} from "./guards/user.guard";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve:{usersData: UsersResolver},
    canDeactivate: [UserGuard],
    children: [
      {path: 'user-details/:id', component: UserDetailsComponent, resolve:{UserData: UserResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
