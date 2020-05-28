import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {ShowDetailsButtonComponent} from '../show-details-button/show-details-button.component';
import {DeleteUserButtonComponent} from '../delete-user-button/delete-user-button.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        ShowDetailsButtonComponent,
        DeleteUserButtonComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.name = 'John Doe';
    component.id = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('John Doe');
  });

  it('should render delete and show details buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-delete-user-button')).toBeTruthy();
    expect(compiled.querySelector('app-show-details-button')).toBeTruthy();
  });
});
