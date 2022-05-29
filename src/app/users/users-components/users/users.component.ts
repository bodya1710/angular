import { Component, OnInit } from '@angular/core';
import {IUsers} from "../../../modules/IUsers";
import {UserDataService} from "../../users-services/user-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: IUsers[];

  constructor(private userDataService: UserDataService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({usersData}) =>  this.users = usersData)
  }

}
