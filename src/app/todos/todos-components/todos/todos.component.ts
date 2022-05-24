import {Component, OnInit} from '@angular/core';
import {TodosDataService} from "../../todos-service/todos-data.service";
import {ITodo} from "../../../modules/ITodo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: ITodo[];

  constructor(private todosDataService: TodosDataService) {
  }

  ngOnInit(): void {
    this.todosDataService.getTodos().subscribe(value => this.todos = value);
  }

}
