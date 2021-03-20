import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Course } from "src/app/models/course";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class CoursesService {
	private _course$: BehaviorSubject<Course> = new BehaviorSubject<Course>(
		null
	);
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
		return this.http.get<Course[]>(
			`${environment.apiUrl}/course/teacher/${teacher}`
		);
	}

	getCourses$() {
		return this._course$.asObservable();
	}
	setCourse$(course: Course) {
		this._course$.next(course);
	}
}
