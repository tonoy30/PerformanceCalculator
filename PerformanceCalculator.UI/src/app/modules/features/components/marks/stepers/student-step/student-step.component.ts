import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Course } from "src/app/models/course";
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
	students: any[] = [];
	courses: Course;
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

		this.courseService.getCourses$().subscribe((res) => {
			if (res === "undefined") {
				this.prevPage();
			}
			this.courses = res;
		});
		this.studentsService
			.getStudentByCourseId(this.courses.id)
			.subscribe((res) => (this.students = res));
	}
	nextPage() {
		this.router.navigate(["marks/obtained-mark"]);
	}
	prevPage() {
		this.router.navigate(["marks/course"]);
	}
	search(event: any): void {
		let filtered: string[] = [];
		let query = event.query;
		for (let i = 0; i < this.students.length; i++) {
			let student = this.students[i];
			if (
				student.email.toLowerCase().indexOf(query.toLowerCase()) === 0
			) {
				this.studentForm.get("id").setValue(student.id);
				filtered.push(student.email);
			}
		}
		this.studentNames = filtered;
	}
}
