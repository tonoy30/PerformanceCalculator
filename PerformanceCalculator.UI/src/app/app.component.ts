import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
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
	constructor(
		private authService: AuthService,
		private primengConfig: PrimeNGConfig
	) {}

	ngOnInit(): void {
		this.primengConfig.ripple = true;
		this.authService.currentUser.subscribe(
			(user: User) => (this.user = user)
		);
	}
	sideBarToggler() {
		this.sideBarOpen = !this.sideBarOpen;
	}
}
