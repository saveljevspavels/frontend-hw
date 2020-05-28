import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {UsersPageComponent} from './pages/users/users.page';
import {UserDetailsPageComponent} from './pages/user-details/user-details.page';
import {UsersResolver} from '../../resolvers/users.resolver';
import {UserDetailsResolver} from '../../resolvers/userDetails.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: UsersPageComponent,
    resolve: {users: UsersResolver}
  },
  { path: 'details/:id',
    component: UserDetailsPageComponent,
    resolve: {userDetails: UserDetailsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
