import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-student-step",
	templateUrl: "./student-step.component.html",
	styleUrls: ["./student-step.component.scss"],
})
export class StudentStepComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}
	nextPage() {
		this.router.navigate(["marks/obtained-mark"]);
	}
	prevPage() {
		this.router.navigate(["marks/course"]);
	}
}
