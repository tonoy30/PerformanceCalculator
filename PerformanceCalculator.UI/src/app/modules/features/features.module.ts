import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { PrimeNgModule } from "src/app/primeng.module";
import { CourseDetailsComponent } from "./courses/course-details/course-details.component";
import { CoursesComponent } from "./courses/courses.component";
import { ExamsComponent } from "./exams/exams.component";
import { FeaturesRoutingModule } from "./features-routing.module";
import { MarksComponent } from "./marks/marks.component";
import { ResultsComponent } from "./results/results.component";
import { CoursesService } from "./services/courses.service";
import { ExamsService } from "./services/exams.service";
import { ResultsService } from "./services/results.service";
import { StudentsService } from "./services/students.service";
import { TeachersService } from "./services/teachers.service";
import { StudentsComponent } from "./students/students.component";
import { TeachersComponent } from "./teachers/teachers.component";

@NgModule({
	declarations: [
		ResultsComponent,
		StudentsComponent,
		TeachersComponent,
		ExamsComponent,
		MarksComponent,
		CoursesComponent,
		CourseDetailsComponent,
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
