import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../../modules/ITodo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() {
  }

  @Input()
  todo!: ITodo;

  ngOnInit(): void {
  }

}
