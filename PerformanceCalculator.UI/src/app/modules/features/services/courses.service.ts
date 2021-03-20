import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "src/app/models/course";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class CoursesService {
	constructor(private http: HttpClient) {}
	getCourses() {
		return this.http.get<Course[]>(`${environment.apiUrl}/course`);
	}
	getCourseById(id: string) {
		return this.http.get<Course>(`${environment.apiUrl}/course/${id}`);
	}
	createCourse(course: Course) {
		course.semester = +course.semester;
		return this.http.post<Course>(`${environment.apiUrl}/course`, course);
	}
	updateCourse(id: string, course: Course) {
		return this.http.put<Course>(
			`${environment.apiUrl}/course/${id}`,
			course
		);
	}
	deleteCourse(id: string) {
		return this.http.delete(`${environment.apiUrl}/course/${id}`);
	}
	getCourseByTeacher(teacher: string) {
		return this.http.get<Courses[]>(
			`${environment.apiUrl}/course/teacher/${teacher}`
		);
	}
}
