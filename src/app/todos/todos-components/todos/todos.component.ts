import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../../modules/ITodo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: ITodo[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({TodosData}) => this.todos = TodosData);
  }

}
