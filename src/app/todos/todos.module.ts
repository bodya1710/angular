import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodosRoutingModule} from './todos-routing.module';
import {TodosComponent} from './todos-components/todos/todos.component';
import {TodosDataService} from "./todos-service/todos-data.service";
import {HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './todos-components/todo/todo.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [TodosDataService]
})
export class TodosModule {
}
