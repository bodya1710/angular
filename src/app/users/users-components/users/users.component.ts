import { Component, OnInit } from '@angular/core';
import {IUsers} from "../../../modules/IUsers";
import {UserDataService} from "../../users-services/user-data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: IUsers[];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getUsers().subscribe(value => this.users = value);
  }

}
