import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users.page';
import {UserComponent} from '../../components/user/user.component';
import {CreateUserComponent} from '../../components/create-user/create-user.component';
import {ShowDetailsButtonComponent} from '../../components/show-details-button/show-details-button.component';
import {DeleteUserButtonComponent} from '../../components/delete-user-button/delete-user-button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from '../../../../services/user.service';

describe('UserPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersPageComponent,
        UserComponent,
        CreateUserComponent,
        ShowDetailsButtonComponent,
        DeleteUserButtonComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [{
        provide: UserService,
        useValue: {
          users: [
            {
              name: 'Name1',
              id: 1
            },
            {
              name: 'Name2',
              id: 2
            },
            {
              name: 'Name2',
              id: 2
            }
          ]
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 users', () => {
    const users = fixture.debugElement.nativeElement.querySelectorAll('app-user');
    expect(users.length).toEqual(3);
  });
});
