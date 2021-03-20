import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Teacher } from "src/app/models/teacher";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class TeachersService {
	constructor(private http: HttpClient) {}
	getTeachers() {
		return this.http.get<Teacher[]>(`${environment.apiUrl}/teacher`);
	}

  deleteTeacher(id: string) {
    return this.http.delete(`${environment.apiUrl}/teacher/${id}`);
  }

  updateTeacher(id: string, teacher: Teacher) {
    return this.http.put(`${environment.apiUrl}/teacher/${id}`, teacher);
  }

  createTeacher(teacher: Teacher) {
    return this.http.post(`${environment.apiUrl}/teacher`, teacher);
  }
}
