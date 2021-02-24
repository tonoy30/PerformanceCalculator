import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: User;
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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
  }
}
