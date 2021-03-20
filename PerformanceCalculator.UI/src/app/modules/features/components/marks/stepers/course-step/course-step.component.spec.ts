import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStepComponent } from './course-step.component';

describe('CourseStepComponent', () => {
  let component: CourseStepComponent;
  let fixture: ComponentFixture<CourseStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
