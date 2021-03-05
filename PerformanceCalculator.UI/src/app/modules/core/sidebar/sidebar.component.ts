import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
	user: User;
	pages = [
		{ routerLink: "", name: "Results" },
		{ routerLink: "/students", name: "Students" },
		{ routerLink: "/teachers", name: "Tecahers" },
		{ routerLink: "/courses", name: "Courses" },
		{ routerLink: "/exams", name: "Exams" },
		{ routerLink: "/marks", name: "Marks" },
	];
	tools = [
		{
			routerLink: "contacts",
			name: "Contacts",
			icon: "import_contacts",
			maxPermissionLevel: 2,
		},
		{
			routerLink: "settings",
			name: "Settings",
			icon: "settings",
			maxPermissionLevel: 2,
		},
		{
			routerLink: "auth/register",
			name: "Register",
			icon: "library_add",
			maxPermissionLevel: 0,
		},
	];
	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.currentUser.subscribe(
			(user: User) => (this.user = user)
		);
	}
}
