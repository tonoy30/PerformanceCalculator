import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-confirmation",
	templateUrl: "./confirmation.component.html",
	styleUrls: ["./confirmation.component.scss"],
})
export class ConfirmationComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}
	complete() {
		this.router.navigate(["marks/confirmation"]);
	}
	prevPage() {
		this.router.navigate(["marks/obtained-mark"]);
	}
}
