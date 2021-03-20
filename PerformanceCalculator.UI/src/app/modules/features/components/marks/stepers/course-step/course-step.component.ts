import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Course } from "src/app/models/course";
import { User } from "src/app/models/user";
import { CoursesService } from "src/app/modules/features/services/courses.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-course-step",
	templateUrl: "./course-step.component.html",
	styleUrls: ["./course-step.component.scss"],
})
export class CourseStepComponent implements OnInit {
	submitted: boolean = false;
	courses: Course[] = [];
	course: Course;
	courseNames: string[] = [];
	currentUser: User;
	courseForm: FormGroup;
	constructor(
		private router: Router,
		private auth: AuthService,
		private coursesService: CoursesService,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		this.courseForm = this.fb.group({
			id: [null, [Validators.required]],
			title: ["", [Validators.required]],
		});
		this.auth.currentUser.subscribe((res) => (this.currentUser = res));
		this.coursesService
			.getCourseByTeacher(this.currentUser.email)
			.subscribe((res) => {
				this.courses = res;
			});
	}
	nextPage() {
		this.coursesService.setCourse$(this.course);
		this.router.navigate(["marks/student"]);
	}
	search(event: any): void {
		let filtered: string[] = [];
		let query = event.query;
		for (let i = 0; i < this.courses.length; i++) {
			let course = this.courses[i];
			if (course.title.toLowerCase().indexOf(query.toLowerCase()) === 0) {
				this.courseForm.get("id").setValue(course.id);
				filtered.push(course.title);
				this.course = course;
			}
		}
		this.courseNames = filtered;
	}
}
