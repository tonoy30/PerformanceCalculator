import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Exam } from "src/app/models/exam";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class ExamsService {
	constructor(private http: HttpClient) {}
	getExams() {
		return this.http.get<Exam[]>(`${environment.apiUrl}/exam`);
	}
}
