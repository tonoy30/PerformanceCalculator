import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Table } from "primeng/table";
import { Student } from "../../../../models/student";
import { CoursesService } from "../../services/courses.service";
import { StudentsService } from "../../services/students.service";
@Component({
	selector: "app-students",
	templateUrl: "./students.component.html",
	styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
	studentDialog: boolean;

	students: Student[];

	student: Student;

	selectedProducts: Student[];

	submitted: boolean;
	attachCourseDialog: boolean;

	constructor(
		private messageService: MessageService,
		private confirmationService: ConfirmationService,
		private studentsService: StudentsService,
		private coursesService: CoursesService
	) {}

	ngOnInit() {
		this.studentsService
			.getStudents()
			.subscribe((res) => (this.students = res));
	}

	openNew() {
		this.student = {};
		this.submitted = false;
		this.studentDialog = true;
	}
	editProduct(student: Student) {
		this.student = { ...student };
		this.studentDialog = true;
	}

	deleteProduct(student: Student) {
		this.confirmationService.confirm({
			message:
				"Are you sure you want to delete " +
				student.registrationNo +
				"?",
			header: "Confirm",
			icon: "pi pi-exclamation-triangle",
			accept: () => {
				this.studentsService.deleteStudent(student.id).subscribe(() => {
					this.students = this.students.filter(
						(val) => val.id !== student.id
					);
					this.student = {};
					this.messageService.add({
						severity: "success",
						summary: "Successful",
						detail: "Course deleted successfully",
						life: 3000,
					});
				});
			},
		});
	}

	hideDialog() {
		this.studentDialog = false;
		this.submitted = false;
	}

	saveStudent() {
		this.submitted = true;
		if (
			this.student.firstName.trim() &&
			this.student.lastName.trim() &&
			this.student.registrationNo.trim() &&
			this.student.session.trim()
		) {
			if (this.student.id) {
				this.students[
					this.findIndexById(this.student.id)
				] = this.student;
				this.studentsService
					.updateStudent(this.student.id, this.student)
					.subscribe(() =>
						this.messageService.add({
							severity: "success",
							summary: "Successful",
							detail: "Student updated successfully",
							life: 3000,
						})
					);
			} else {
				this.studentsService
					.createStudent(this.student)
					.subscribe((res: Student) => {
						this.messageService.add({
							severity: "success",
							summary: "Successful",
							detail: "Student Created",
							life: 3000,
						});
						this.students.push(res);
					});
			}
			this.studentDialog = false;
			this.students = [...this.students];
			this.student = {};
		}
	}

	findIndexById(id: string): number {
		let index = -1;
		for (let i = 0; i < this.students.length; i++) {
			if (this.students[i].id === id) {
				index = i;
				break;
			}
		}

		return index;
	}

	onSearch(dt: Table, $event: any) {
		dt.filterGlobal($event.target.value, "contains");
	}
	addCourse(data: any) {
		this.attachCourseDialog = true;
		this.student = data;
	}
	saveCourses() {
		this.studentsService
			.attachCourse(
				this.student.id,
				"07cb8763-a3b7-41b0-bb5d-70004fc64edc"
			)
			.subscribe((res) => {
				this.messageService.add({
					severity: "success",
					summary: "Successful",
					detail: "Student updated successfully",
					life: 3000,
				});
				this.attachCourseDialog = false;
			});
	}
}
