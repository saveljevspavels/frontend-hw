import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserButtonComponent } from './delete-user-button.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('DeleteUserButtonComponent', () => {
  let component: DeleteUserButtonComponent;
  let fixture: ComponentFixture<DeleteUserButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserButtonComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteUser method on click', () => {
    spyOn(component, 'deleteUser');
    const button = fixture.debugElement.nativeElement.querySelector('.delete-user-button');
    button.click();
    expect(component.deleteUser).toHaveBeenCalled();
  });
});
