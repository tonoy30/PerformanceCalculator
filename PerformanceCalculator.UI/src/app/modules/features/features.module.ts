import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { PrimeNgModule } from "src/app/primeng.module";
import { CoursesComponent } from "./components/courses/courses.component";
import { ExamsComponent } from "./components/exams/exams.component";
import { MarksComponent } from "./components/marks/marks.component";
import { ResultsComponent } from "./components/results/results.component";
import { StudentsComponent } from "./components/students/students.component";
import { TeachersComponent } from "./components/teachers/teachers.component";
import { FeaturesRoutingModule } from "./features-routing.module";
import { CoursesService } from "./services/courses.service";
import { ExamsService } from "./services/exams.service";
import { ResultsService } from "./services/results.service";
import { StudentsService } from "./services/students.service";
import { TeachersService } from "./services/teachers.service";
import { CourseStepComponent } from './components/marks/stepers/course-step/course-step.component';
import { StudentStepComponent } from './components/marks/stepers/student-step/student-step.component';
import { ObtainedMarkStepComponent } from './components/marks/stepers/obtained-mark-step/obtained-mark-step.component';
import { ConfirmationComponent } from './components/marks/stepers/confirmation/confirmation.component';

@NgModule({
	declarations: [
		ResultsComponent,
		StudentsComponent,
		TeachersComponent,
		ExamsComponent,
		MarksComponent,
		CoursesComponent,
		CourseStepComponent,
		StudentStepComponent,
		ObtainedMarkStepComponent,
		ConfirmationComponent,
	],
	imports: [
		CommonModule,
		FeaturesRoutingModule,
		MaterialModule,
		HttpClientModule,
		PrimeNgModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		StudentsService,
		CoursesService,
		ExamsService,
		ResultsService,
		TeachersService,
	],
})
export class FeaturesModule {}
