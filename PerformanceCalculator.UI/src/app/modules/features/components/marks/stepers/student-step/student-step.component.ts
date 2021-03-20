import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CoursesService } from "src/app/modules/features/services/courses.service";
import { StudentsService } from "src/app/modules/features/services/students.service";

@Component({
	selector: "app-student-step",
	templateUrl: "./student-step.component.html",
	styleUrls: ["./student-step.component.scss"],
})
export class StudentStepComponent implements OnInit {
	studentForm: FormGroup;
	studentNames: string[] = [];
	constructor(
		private router: Router,
		private courseService: CoursesService,
		private studentsService: StudentsService,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		this.studentForm = this.fb.group({
			id: [null, [Validators.required]],
			name: ["", [Validators.required]],
		});
		this.courseService.getCourses$().subscribe((res) => console.log(res));
	}
	nextPage() {
		this.router.navigate(["marks/obtained-mark"]);
	}
	prevPage() {
		this.router.navigate(["marks/course"]);
	}
	search(event: any): void {}
}
