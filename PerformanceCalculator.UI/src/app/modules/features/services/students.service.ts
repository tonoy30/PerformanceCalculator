import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Student } from "../../../models/student";

@Injectable({
	providedIn: "root",
})
export class StudentsService {
	constructor(private http: HttpClient) {}

	getStudents() {
		return this.http.get<any[]>(`${environment.apiUrl}/student`);
	}
	getStudentDetails(id: string) {
		return this.http.get(`${environment.apiUrl}/student/${id}`);
	}

	updateStudent(id: string, student: Student) {
		return this.http.put(`${environment.apiUrl}/Student/${id}`, student);
	}

	createStudent(student: Student) {
		return this.http.post(`${environment.apiUrl}/student`, student);
	}

	deleteStudent(id: string) {
		return this.http.delete(`${environment.apiUrl}/student/${id}`);
	}
	attachCourse(studentId: string, courseId: string) {
		return this.http.put<Student>(
			`${environment.apiUrl}/Student/add-course/${studentId}/${courseId}`,
			{}
		);
	}
	getStudentByCourseId(id: string) {
		return this.http.get<any[]>(
			`${environment.apiUrl}/Student/students/${id}`
		);
	}
}
