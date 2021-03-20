import {Component, OnInit} from '@angular/core';
import {Table} from 'primeng/table';
import {Exam} from 'src/app/models/exam';
import {ExamsService} from '../../services/exams.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styles: [`
    :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
    }
  `],
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent implements OnInit {
  teacherDialog: boolean;

  exams: Exam[];

  exam: Exam;

  selectedProducts: Exam[];

  submitted: boolean;

  statuses: any[];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private examService: ExamsService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.examService.getExams().subscribe((res) => (this.exams = res));

    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];
  }

  // tslint:disable-next-line:typedef
  openNew() {
    this.exam = {};
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
        this.exams = this.exams.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  // tslint:disable-next-line:typedef
  editProduct(exam: Exam) {
    this.exam = {...exam};
    this.teacherDialog = true;
  }

  // tslint:disable-next-line:typedef
  deleteProduct(exam: Exam) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + exam.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.examService.deleteExam(exam.id).subscribe(() => {
          this.exams = this.exams.filter(
            (val) => val.id !== exam.id
          );
          this.exam = {};
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
    if (this.exam.title.trim()
      && this.exam.totalMark
      && this.exam.examTypeEnum
      && this.exam.obtainedMark) {
      if (this.exam.id) {
        this.exams[this.findIndexById(this.exam.id)] = this.exam;
        this.examService
          .updateExam(this.exam.id, this.exam)
          .subscribe(() =>
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Exam updated successfully',
              life: 3000,
            })
          );
      } else {
        this.examService.createExam(this.exam).subscribe((res: Exam) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Exam Created',
            life: 3000,
          });
          this.exams.push(res);
        });
      }
      this.teacherDialog = false;
      this.exams = [...this.exams];
      this.exam = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.exams.length; i++) {
      if (this.exams[i].id === id) {
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
