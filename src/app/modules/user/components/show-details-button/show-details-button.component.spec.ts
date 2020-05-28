import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsButtonComponent } from './show-details-button.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ShowDetailsButtonComponent', () => {
  let component: ShowDetailsButtonComponent;
  let fixture: ComponentFixture<ShowDetailsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailsButtonComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showUserDetails method on click', () => {
    spyOn(component, 'showUserDetails');
    const button = fixture.debugElement.nativeElement.querySelector('.show-details-button');
    button.click();
    expect(component.showUserDetails).toHaveBeenCalled();
  });
});
