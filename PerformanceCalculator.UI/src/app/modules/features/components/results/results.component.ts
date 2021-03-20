import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Result, ResultCourse } from "src/app/models/result";

const ELEMENT_DATA: Result[] = [
	{
		id: "12",
		regNo: "2016831030",
		name: "Tonoy",
		courses: [
			{
				id: "121",
				code: "SWE450",
				title: "Project 450",
				GPA: 4.0,
				grade: "A+",
			},
			{
				id: "122",
				code: "SWE451",
				title: "Project 451",
				GPA: 3.75,
				grade: "A",
			},
			{
				id: "122",
				code: "SWE453",
				title: "Project 453",
				GPA: 3.75,
				grade: "A",
			},
		],
	},
	{
		id: "13",
		regNo: "2016831013",
		name: "Dipto",
		courses: [
			{
				id: "121",
				code: "SWE450",
				title: "Project 450",
				GPA: 4.0,
				grade: "A+",
			},
			{
				id: "122",
				code: "SWE453",
				title: "Project 45",
				GPA: 3.75,
				grade: "A",
			},
		],
	},
	{
		id: "12",
		regNo: "2016831016",
		name: "Masum",
		courses: [
			{
				id: "121",
				code: "SWE450",
				title: "Project 450",
				GPA: 4.0,
				grade: "A+",
			},
			{
				id: "122",
				code: "SWE451",
				title: "Project 451",
				GPA: 3.75,
				grade: "A",
			},
			{
				id: "122",
				code: "SWE453",
				title: "Project 453",
				GPA: 3.75,
				grade: "A",
			},
		],
	},
];

const courese: ResultCourse[] = [
	{ id: "121", code: "SWE450", title: "Project 450" },
	{ id: "122", code: "SWE451", title: "Project 451" },
	{ id: "123", code: "SWE453", title: "Project 453" },
	{ id: "123", code: "SWE454", title: "Project 454" },
];

@Component({
	selector: "app-results",
	templateUrl: "./results.component.html",
	styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements AfterViewInit {
	courseColumn = courese.map((c) => c.code);
	displayedColumns: string[] = ["Reg. No", "Name", ...this.courseColumn];
	dataSource = new MatTableDataSource<Result>(ELEMENT_DATA);

	@ViewChild(MatPaginator)
	paginator!: MatPaginator;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	getGPA(element: Result, item: string) {
		const gpa = element.courses.find((c) => c.code === item)?.GPA;
		return gpa !== undefined ? gpa : 0;
	}
}
