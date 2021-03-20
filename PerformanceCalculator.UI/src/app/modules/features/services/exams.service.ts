import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Exam} from "src/app/models/exam";
import {environment} from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ExamsService {
  constructor(private http: HttpClient) {
  }

  getExams() {
    return this.http.get<Exam[]>(`${environment.apiUrl}/exam`);
  }

  deleteExam(id: string) {
    return this.http.delete(`${environment.apiUrl}/exam/${id}`);
  }

  updateExam(id: string, exam: Exam) {
    return this.http.put(`${environment.apiUrl}/exam/${id}`, exam);
  }

  createExam(exam: Exam) {
    return this.http.post(`${environment.apiUrl}/exam`, exam);
  }
}
