import { Component, OnInit } from "@angular/core";
import { Table } from "primeng/table";
import { Teacher } from "src/app/models/teacher";
import { TeachersService } from "../../services/teachers.service";

@Component({
	selector: "app-teachers",
	templateUrl: "./teachers.component.html",
	styleUrls: ["./teachers.component.scss"],
})
export class TeachersComponent implements OnInit {
	rows: number = 10;
	teacherDialog: boolean = false;
	teacher: Teacher;
	teachers: Teacher[] = [];
	constructor(private service: TeachersService) {}

	ngOnInit(): void {
		this.service
			.getTeachers()
			.subscribe((teachers) => (this.teachers = teachers));
	}
	create() {}
	onSearch(dt: Table, event: any) {
		dt.filterGlobal(event.target.value, "contains");
	}
	editTeacher(id: string, teacher: Teacher) {}
	deleteTeacher(teacher: Teacher) {}
	hideDialog() {}
	saveTeacher() {}
}
