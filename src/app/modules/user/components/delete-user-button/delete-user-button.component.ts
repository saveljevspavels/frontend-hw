import {Component, Input} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {NotificationService} from '../../../../services/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-user-button',
  templateUrl: './delete-user-button.component.html',
  styleUrls: ['./delete-user-button.component.scss']
})
export class DeleteUserButtonComponent {

  @Input()
  private userId: number;

  constructor(private userService: UserService,
              private router: Router) {
  }

  async deleteUser() {
    if (this.router.url.indexOf('users') === -1) {
      await this.router.navigate(['users']);
    }
    this.userService.deleteUser(this.userId).subscribe(() => {
      NotificationService.addNotification(`User (id: ${this.userId}) was successfully deleted`);
    });
  }
}
