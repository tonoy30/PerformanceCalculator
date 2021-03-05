import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	@Output() toggleSideBarForMe = new EventEmitter<any>();
	showButton: boolean;
	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.authService.currentUser.subscribe((data) =>
			data === null ? (this.showButton = true) : (this.showButton = false)
		);

	}
	toggleSidebar() {
		this.toggleSideBarForMe.emit();
		setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 300);
	}
	logout() {
		this.authService
			.logout()
			.subscribe(() => this.router.navigate(["auth/login"]));
	}
}
