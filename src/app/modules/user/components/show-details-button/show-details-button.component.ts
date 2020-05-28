import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-details-button',
  templateUrl: './show-details-button.component.html',
  styleUrls: ['./show-details-button.component.scss'],
})
export class ShowDetailsButtonComponent implements OnInit {
  @Input()
  private userId: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  showUserDetails() {
    this.router.navigate(['/details', this.userId]);
  }
}
