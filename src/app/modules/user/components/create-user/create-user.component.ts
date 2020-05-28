import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {NotificationService} from '../../../../services/notification.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public createUserForm: FormGroup = null;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {

  }

  get firstName() { return this.createUserForm.get('firstName'); }
  get lastName() { return this.createUserForm.get('lastName'); }
  get email() { return this.createUserForm.get('email'); }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit() {
    this.userService.createUser(
      this.createUserForm.controls.firstName.value,
      this.createUserForm.controls.lastName.value,
      this.createUserForm.controls.email.value
    ).subscribe(() => {
      NotificationService.addNotification('New user has been successfully created');
      this.resetForm();
    });
  }

  resetForm() {
    this.createUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
