import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Teacher } from 'src/app/models/teacher';
import { TeachersService } from '../../services/teachers.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  teacherDialog: boolean;

  teachers: Teacher[];

  teacher: Teacher;

  selectedProducts: Teacher[];

  submitted: boolean;

  statuses: any[];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private teacherService: TeachersService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.teacherService.getTeachers().subscribe((res) => (this.teachers = res));

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];
  }

  // tslint:disable-next-line:typedef
  openNew() {
    this.teacher = {};
    this.submitted = false;
    this.teacherDialog = true;
  }

  // tslint:disable-next-line:typedef
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teachers = this.teachers.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  // tslint:disable-next-line:typedef
  editProduct(teacher: Teacher) {
    this.teacher = {...teacher};
    this.teacherDialog = true;
  }

  // tslint:disable-next-line:typedef
  deleteProduct(teacher: Teacher) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + teacher.firstName + ' ' + teacher.lastName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teacherService.deleteTeacher(teacher.id).subscribe(() => {
          this.teachers = this.teachers.filter(
            (val) => val.id !== teacher.id
          );
          this.teacher = {};
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
    this.teacherDialog = false;
    this.submitted = false;
  }

  // tslint:disable-next-line:typedef
  saveProduct() {
    this.submitted = true;
    if (this.teacher.firstName.trim()
      && this.teacher.lastName.trim()
      && this.teacher.email.trim()
      && this.teacher.phoneNo.trim()) {
      if (this.teacher.id) {
        this.teachers[this.findIndexById(this.teacher.id)] = this.teacher;
        this.teacherService
          .updateTeacher(this.teacher.id, this.teacher)
          .subscribe(() =>
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Student updated successfully',
              life: 3000,
            })
          );
      } else {
        this.teacherService.createTeacher(this.teacher).subscribe((res: Teacher) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Student Created',
            life: 3000,
          });
          this.teachers.push(res);
        });
      }
      this.teacherDialog = false;
      this.teachers = [...this.teachers];
      this.teacher = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.teachers.length; i++) {
      if (this.teachers[i].id === id) {
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
