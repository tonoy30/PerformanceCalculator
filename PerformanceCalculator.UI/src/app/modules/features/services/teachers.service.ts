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
}
