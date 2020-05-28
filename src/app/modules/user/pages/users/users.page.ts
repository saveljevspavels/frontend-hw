import { Component, OnInit } from '@angular/core';

import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  get users() {
    return this.userService.users;
  }

  ngOnInit() {
  }

}
