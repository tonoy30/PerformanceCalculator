import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';
import { MarksComponent } from './marks/marks.component';
import { ResultsComponent } from './results/results.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: '', component: ResultsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'marks', component: MarksComponent },
  { path: 'courses', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
