import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user = {
    name: 'Mehedi Chomo',
    email: 'mehedi.chomo@gmail.com',
    avatar: '../../../assets/images/nose.jpg',
  };
  pages = [
    { routerLink: '', name: 'Results' },
    { routerLink: '/students', name: 'Students' },
    { routerLink: '/teachers', name: 'Tecahers' },
    { routerLink: '/courses', name: 'Courses' },
    { routerLink: '/exams', name: 'Exams' },
    { routerLink: '/marks', name: 'Marks' },
  ];
  tools = [
    { routerLink: 'contacts', name: 'Contacts', icon: 'import_contacts' },
    { routerLink: 'settings', name: 'Settings', icon: 'settings' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
