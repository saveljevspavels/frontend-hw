import { Injectable } from '@angular/core';
import {ActivatedRoute, Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<any> {
  constructor(private userService: UserService,
              private route: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getUserDetails(route.params.id);
  }
}
