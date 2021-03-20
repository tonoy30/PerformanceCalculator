import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../../services/students.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Table} from 'primeng/table';
import {Student} from '../../../../models/student';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  studentDialog: boolean;

  students: Student[];

  student: Student;

  selectedProducts: Student[];

  submitted: boolean;

  statuses: any[];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private studentsService: StudentsService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.studentsService.getStudents().subscribe((res) => (this.students = res));

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];
  }

  // tslint:disable-next-line:typedef
  openNew() {
    this.student = {};
    this.submitted = false;
    this.studentDialog = true;
  }

  // tslint:disable-next-line:typedef
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.students = this.students.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  // tslint:disable-next-line:typedef
  editProduct(student: Student) {
    this.student = {...student};
    this.studentDialog = true;
  }

  // tslint:disable-next-line:typedef
  deleteProduct(student: Student) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + student.registrationNo + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentsService.deleteStudent(student.id).subscribe(() => {
          this.students = this.students.filter(
            (val) => val.id !== student.id
          );
          this.student = {};
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Course deleted successfully',
            life: 3000,
          });
        });
      }
    });
  }

  // tslint:disable-next-line:typedef
  hideDialog() {
    this.studentDialog = false;
    this.submitted = false;
  }

  // tslint:disable-next-line:typedef
  saveProduct() {
    this.submitted = true;
    if (this.student.firstName.trim()
      && this.student.lastName.trim()
      && this.student.registrationNo.trim()
      && this.student.session.trim()) {
      if (this.student.id) {
        this.students[this.findIndexById(this.student.id)] = this.student;
        this.studentsService
          .updateStudent(this.student.id, this.student)
          .subscribe(() =>
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Student updated successfully',
              life: 3000,
            })
          );
      } else {
        this.studentsService.createStudent(this.student).subscribe((res: Student) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Student Created',
            life: 3000,
          });
          this.students.push(res);
        });
      }
      this.studentDialog = false;
      this.students = [...this.students];
      this.student = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  // tslint:disable-next-line:typedef
  onSearch(dt: Table, $event: any) {
    dt.filterGlobal($event.target.value, 'contains');
  }
}
