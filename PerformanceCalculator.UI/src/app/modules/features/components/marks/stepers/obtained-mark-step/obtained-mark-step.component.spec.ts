import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainedMarkStepComponent } from './obtained-mark-step.component';

describe('ObtainedMarkStepComponent', () => {
  let component: ObtainedMarkStepComponent;
  let fixture: ComponentFixture<ObtainedMarkStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtainedMarkStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtainedMarkStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
