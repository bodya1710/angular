import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../../modules/IUsers";
import {ActivatedRoute} from "@angular/router";
import {UserDataService} from "../../users-services/user-data.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj!: IUsers;

  constructor(private activatedRout: ActivatedRoute,
              private userService: UserDataService) {
  }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(({id}) => {
      this.userService.getUser(id).subscribe(value => this.userDetailsObj = value);
    })
  }

}
