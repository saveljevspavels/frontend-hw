import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsPageComponent } from './user-details.page';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { UserAvatarComponent } from '../../components/user-avatar/user-avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteUserButtonComponent } from '../../components/delete-user-button/delete-user-button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('UserDetailsPageComponent', () => {
  let component: UserDetailsPageComponent;
  let fixture: ComponentFixture<UserDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDetailsPageComponent,
        UserDetailsComponent,
        UserAvatarComponent,
        DeleteUserButtonComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                userDetails: {
                  id: 2,
                  email: 'janet.weaver@reqres.in',
                  firstName: 'Janet',
                  lastName: 'Weaver',
                  avatar:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
