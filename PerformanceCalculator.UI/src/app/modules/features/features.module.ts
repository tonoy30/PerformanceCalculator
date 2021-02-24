import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ResultsComponent } from './results/results.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ExamsComponent } from './exams/exams.component';
import { MarksComponent } from './marks/marks.component';
import { CoursesComponent } from './courses/courses.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    ResultsComponent,
    StudentsComponent,
    TeachersComponent,
    ExamsComponent,
    MarksComponent,
    CoursesComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, MaterialModule],
})
export class FeaturesModule {}
