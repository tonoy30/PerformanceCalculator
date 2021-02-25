import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  constructor(private studentsService: StudentsService) {}
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'registrationNo',
    'phoneNo',
    'session',
    'Details',
  ];
  dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.studentsService
      .getStudents()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }
  naviagteToDetails(id: string) {
    this.studentsService
      .getStudentDetails(id)
      .subscribe((data) => console.log(data));
  }
}
