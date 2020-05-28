import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<any> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getUsers();
  }
}
