import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../models/IUsers";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  @Input()
  user!: IUser;


  ngOnInit(): void {
  }

}
