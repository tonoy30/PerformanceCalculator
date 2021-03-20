import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-obtained-mark-step",
	templateUrl: "./obtained-mark-step.component.html",
	styleUrls: ["./obtained-mark-step.component.scss"],
})
export class ObtainedMarkStepComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}
	nextPage() {
		this.router.navigate(["marks/confirmation"]);
	}
	prevPage() {
		this.router.navigate(["marks/student"]);
	}
}
