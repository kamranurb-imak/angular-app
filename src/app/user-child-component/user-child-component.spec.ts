import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChildComponent } from './user-child-component';

describe('UserChildComponent', () => {
  let component: UserChildComponent;
  let fixture: ComponentFixture<UserChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserChildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
