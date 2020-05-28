import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BaseService } from './base.service';
import { User } from '../dto/User';
import { ServiceResponse } from '../dto/ServiceResponse';
import { UserDetails } from '../dto/UserDetails';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  private _users: User[];

  public set users(user: User[]) {
    this._users = user;
  }

  public get users(): User[] {
    return this._users;
  }

  constructor(http: HttpClient) {
    super(http);
  }

  getUsers(): Observable<User[]> {
    if (!this.users) {
      return this.http.get<ServiceResponse>(this.baseUrl('users')).pipe(
        map((res) => {
          this.users = res.data.map((user: any) => {
            return this.mapUser(user);
          });
          return this.users;
        }),
        shareReplay({ bufferSize: 1, refCount: true })
      );
    }
  }

  getUserDetails(id: number): Observable<UserDetails> {
    return this.http.get<ServiceResponse>(this.baseUrl(`users/${id}`)).pipe(
      map((res) => {
        return this.mapUserDetails(res.data);
      })
    );
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl(`users/${id}`)).pipe(
      map(() => {
        this.users = this.users.filter((user) => user.id !== id);
      })
    );
  }

  createUser(firstName: string, lastName: string, email: string) {
    return this.http
      .post(this.baseUrl('users'), {
        first_name: firstName,
        last_name: lastName,
        email,
        id: new Date().valueOf(),
      })
      .pipe(
        map((newUser: any) => {
          this.users = [...this.users, this.mapUser(newUser)]; //
        })
      );
  }

  editUser(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    avatar
  ): Observable<UserDetails> {
    return this.http
      .patch(this.baseUrl(`users/${id}`), {
        first_name: firstName,
        last_name: lastName,
        email,
        avatar,
      })
      .pipe(
        map((res) => {
          if (this.users) {
            const updatedUserIndex = this.users.indexOf(
              this.users.find((user: User) => user.id === id)
            );
            this.users[updatedUserIndex] = {
              ...this.users[updatedUserIndex],
              ...this.mapUser(res),
            };
          }
          return this.mapUserDetails(res);
        })
      );
  }

  mapUserDetails(data: any): UserDetails {
    const userDetails: UserDetails = {
      firstName: data.first_name,
      lastName: data.last_name,
      avatar: data.avatar,
      email: data.email,
    };
    if (data.id) {
      userDetails.id = data.id;
    }
    if (data.updatedAt) {
      userDetails.updatedAt = data.updatedAt;
    }
    return userDetails;
  }

  mapUser(data: any): User {
    const user: User = {
      name: `${data.first_name} ${data.last_name}`,
    };
    if (data.id) {
      user.id = data.id;
    }
    return user;
  }
}
