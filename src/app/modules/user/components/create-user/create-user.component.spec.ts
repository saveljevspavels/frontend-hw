import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form on valid data', () => {
    spyOn(component, 'onSubmit');
    component.createUserForm.controls.firstName.setValue('Fisrt');
    component.createUserForm.controls.lastName.setValue('Last');
    component.createUserForm.controls.email.setValue('email@mail.com');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      '.create-user__button'
    );
    button.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should not submit form on invalid data', () => {
    spyOn(component, 'onSubmit');
    component.createUserForm.controls.email.setValue('123');
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      '.create-user__button'
    );
    button.click();
    expect(component.onSubmit).not.toHaveBeenCalled();
  });
});
