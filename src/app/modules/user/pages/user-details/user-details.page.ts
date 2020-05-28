import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDetails } from '../../../../dto/UserDetails';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPageComponent implements OnInit {
  public userDetails: UserDetails;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.userDetails = this.route.snapshot.data.userDetails;
  }

  goToUserList() {
    this.router.navigate(['users']);
  }
}
