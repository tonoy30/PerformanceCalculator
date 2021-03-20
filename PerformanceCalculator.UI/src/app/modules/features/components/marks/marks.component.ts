import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
	selector: "app-marks",
	templateUrl: "./marks.component.html",
	styleUrls: ["./marks.component.scss"],
})
export class MarksComponent implements OnInit {
	items: MenuItem[];
	constructor() {}

	ngOnInit(): void {
		this.items = [
			{
				label: "Course",
				routerLink: "course",
			},
			{
				label: "Student",
				routerLink: "student",
			},
			{
				label: "Obtained Mark",
				routerLink: "obtained-mark",
			},
			{
				label: "Confirmation",
				routerLink: "confirmation",
			},
		];
	}
}
