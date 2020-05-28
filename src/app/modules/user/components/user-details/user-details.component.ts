import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../../../services/user.service';
import { NotificationService } from '../../../../services/notification.service';
import { UserDetails } from '../../../../dto/user-details.dto';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input()
  public userDetails: UserDetails;

  public editUserForm: FormGroup = null;

  public editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  get firstName() {
    return this.editUserForm.get('firstName');
  }
  get lastName() {
    return this.editUserForm.get('lastName');
  }
  get email() {
    return this.editUserForm.get('email');
  }
  get avatar() {
    return this.editUserForm.get('avatar');
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.editUserForm = this.formBuilder.group({
      firstName: [this.userDetails.firstName, [Validators.required]],
      lastName: [this.userDetails.lastName, [Validators.required]],
      email: [this.userDetails.email, [Validators.required, Validators.email]],
      avatar: [this.userDetails.avatar],
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  onSubmit() {
    this.userService
      .editUser(
        this.userDetails.id,
        this.editUserForm.controls.firstName.value,
        this.editUserForm.controls.lastName.value,
        this.editUserForm.controls.email.value,
        this.editUserForm.controls.avatar.value
      )
      .subscribe((res) => {
        this.toggleEdit();
        NotificationService.addNotification(
          'User details have been successfully updated'
        );
        this.userDetails = { ...this.userDetails, ...res };
        this.resetForm();
      });
  }
}
