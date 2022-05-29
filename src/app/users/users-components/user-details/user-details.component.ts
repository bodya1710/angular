import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../../modules/IUsers";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj!: IUsers;

  constructor(private activatedRout: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRout.data.subscribe(({UserData}) => this.userDetailsObj = UserData);
  }
}
