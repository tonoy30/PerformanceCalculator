import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./components/courses/courses.component";
import { ExamsComponent } from "./components/exams/exams.component";
import { MarksComponent } from "./components/marks/marks.component";
import { ConfirmationComponent } from "./components/marks/stepers/confirmation/confirmation.component";
import { CourseStepComponent } from "./components/marks/stepers/course-step/course-step.component";
import { ObtainedMarkStepComponent } from "./components/marks/stepers/obtained-mark-step/obtained-mark-step.component";
import { StudentStepComponent } from "./components/marks/stepers/student-step/student-step.component";
import { ResultsComponent } from "./components/results/results.component";
import { StudentsComponent } from "./components/students/students.component";
import { TeachersComponent } from "./components/teachers/teachers.component";

const routes: Routes = [
	{ path: "", component: ResultsComponent },
	{ path: "students", component: StudentsComponent },
	{ path: "exams", component: ExamsComponent },
	{ path: "teachers", component: TeachersComponent },
	{
		path: "marks",
		component: MarksComponent,
		children: [
			{ path: "", redirectTo: "course", pathMatch: "full" },
			{ path: "course", component: CourseStepComponent },
			{ path: "student", component: StudentStepComponent },
			{ path: "obtained-mark", component: ObtainedMarkStepComponent },
			{ path: "confirmation", component: ConfirmationComponent },
		],
	},
	{
		path: "courses",
		children: [
			{
				path: "",
				component: CoursesComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FeaturesRoutingModule {}
