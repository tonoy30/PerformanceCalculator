import { Component, OnInit } from "@angular/core";
import { Table } from "primeng/table";
import { Exam } from "src/app/models/exam";
import { ExamsService } from "../../services/exams.service";

@Component({
	selector: "app-exams",
	templateUrl: "./exams.component.html",
	styleUrls: ["./exams.component.scss"],
})
export class ExamsComponent implements OnInit {
	rows: number = 10;
	exam: Exam;
	exams: Exam[] = [];
	examDialog: boolean = false;
	constructor(private service: ExamsService) {}

	ngOnInit(): void {
		this.service.getExams().subscribe((res) => (this.exams = res));
	}
	create() {}
	onSearch(dt: Table, event: any) {
		dt.filterGlobal(event.target.value, "contains");
	}
	editExam(id: string, exam: Exam) {}
	deleteExam(exam: Exam) {}
	hideDialog() {}
	saveExam() {}
}
