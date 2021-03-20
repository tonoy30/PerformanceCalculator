import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStepComponent } from './student-step.component';

describe('StudentStepComponent', () => {
  let component: StudentStepComponent;
  let fixture: ComponentFixture<StudentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
