import { Component, OnInit } from "@angular/core";
import { User } from "./models/user";
import { AuthService } from "./services/auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	user: User;
	sideBarOpen = false;
	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.currentUser.subscribe(
			(user: User) => (this.user = user)
		);
	}
	sideBarToggler() {
		this.sideBarOpen = !this.sideBarOpen;
	}
}
