import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './components/user/user.component';
import { UsersPageComponent } from './pages/users/users.page';
import { UserDetailsPageComponent } from './pages/user-details/user-details.page';
import {UserRoutingModule} from './user-routing.module';
import { DeleteUserButtonComponent } from './components/delete-user-button/delete-user-button.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowDetailsButtonComponent } from './components/show-details-button/show-details-button.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    UserComponent,
    UsersPageComponent,
    UserDetailsPageComponent,
    DeleteUserButtonComponent,
    CreateUserComponent,
    ShowDetailsButtonComponent,
    UserDetailsComponent,
    UserAvatarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
