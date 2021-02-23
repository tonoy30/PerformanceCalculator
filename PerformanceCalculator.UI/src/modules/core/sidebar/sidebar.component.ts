import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user = {
    name: 'Tonoy Akando',
    email: 'tonoy.sust@gmail.com',
    avatar: '../../../../assets/images/tonoy.jpeg',
  };
  pages = [
    { routerLink: '/', name: 'Dashboard' },
    { routerLink: '/posts', name: 'Posts' },
  ];
  tools = [
    { routerLink: '/contacts', name: 'Contacts', icon: 'import_contacts' },
    { routerLink: '/settings', name: 'Settings', icon: 'settings' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
