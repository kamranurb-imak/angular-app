import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooks } from './life-cycle-hooks';

describe('LifeCycleHooks', () => {
  let component: LifeCycleHooks;
  let fixture: ComponentFixture<LifeCycleHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleHooks],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeCycleHooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
