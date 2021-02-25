import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<any[]>(`${environment.apiUrl}/student`);
  }
  getStudentDetails(id: string) {
    return this.http.get(`${environment.apiUrl}/student/${id}`);
  }
}
