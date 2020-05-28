import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import {UserAvatarComponent} from '../user-avatar/user-avatar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeleteUserButtonComponent} from '../delete-user-button/delete-user-button.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDetailsComponent,
        UserAvatarComponent,
        UserDetailsComponent,
        DeleteUserButtonComponent,
        UserAvatarComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.userDetails = {
      id: 2,
      email: 'janet.weaver@reqres.in',
      firstName: 'Janet',
      lastName: 'Weaver',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user data', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input-group:nth-child(1)').textContent).toContain('2');
    expect(compiled.querySelector('.input-group:nth-child(2)').textContent).toContain('N/A');
    expect(compiled.querySelector('.input-group:nth-child(3)').textContent).toContain('Janet');
    expect(compiled.querySelector('.input-group:nth-child(4)').textContent).toContain('Weaver');
    expect(compiled.querySelector('.input-group:nth-child(5)').textContent).toContain('janet.weaver@reqres.in');
  });

  it('should enter edit mode', () => {
    const compiled = fixture.debugElement.nativeElement;
    spyOn(component, 'toggleEdit');
    const editButton = compiled.querySelector('.edit-user__button--edit');
    editButton.click();
    expect(component.toggleEdit).toHaveBeenCalled();
  });

  it('should submit form', () => {
    component.editMode = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    spyOn(component, 'onSubmit');
    const saveButton = compiled.querySelector('.edit-user__button--save');
    saveButton.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
