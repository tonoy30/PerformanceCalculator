import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./components/courses/courses.component";
import { ExamsComponent } from "./components/exams/exams.component";
import { MarksComponent } from "./components/marks/marks.component";
import { ResultsComponent } from "./components/results/results.component";
import { StudentsComponent } from "./components/students/students.component";
import { TeachersComponent } from "./components/teachers/teachers.component";

const routes: Routes = [
	{ path: "", component: ResultsComponent },
	{ path: "students", component: StudentsComponent },
	{ path: "exams", component: ExamsComponent },
	{ path: "teachers", component: TeachersComponent },
	{ path: "marks", component: MarksComponent },
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
