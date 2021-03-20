import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Courses } from "src/app/models/course";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class CoursesService {
	private _course$: BehaviorSubject<Courses> = new BehaviorSubject<Courses>(
		null
	);
	constructor(private http: HttpClient) {}
	getCourses() {
		return this.http.get<Courses[]>(`${environment.apiUrl}/course`);
	}
	getCourseById(id: string) {
		return this.http.get<Courses>(`${environment.apiUrl}/course/${id}`);
	}
	createCourse(course: Courses) {
		course.semester = +course.semester;
		return this.http.post<Courses>(`${environment.apiUrl}/course`, course);
	}
	updateCourse(id: string, course: Courses) {
		return this.http.put<Courses>(
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
	getCourses$() {
		return this._course$.asObservable();
	}
	setCourse$(course: Courses) {
		this._course$.next(course);
	}
}
