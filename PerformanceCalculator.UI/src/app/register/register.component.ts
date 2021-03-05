import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
	hide = true;
	registerForm: FormGroup;
	roles = [
		{
			type: "Admin",
			value: 0,
		},
		{
			type: "Teacher",
			value: 1,
		},
		{
			type: "Student",
			value: 2,
		},
	];
	constructor(
		private formBuilder: FormBuilder,
		private authenticationService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.registerForm = this.formBuilder.group({
			email: ["", [Validators.required, Validators.email]],
			password: ["", Validators.required],
			role: [2, Validators.required],
		});
	}
	onSubmit() {
		if (this.registerForm.invalid) {
			return;
		}
		const { email, password, role } = this.registerForm.value;
		console.log(email, password, Number.parseInt(role));
		this.authenticationService
			.register(email, password, Number.parseInt(role))
			.pipe(take(1))
			.subscribe((user: User) => {
				if (user) {
					switch (user.role) {
						case 0:
						case 1:
							this.router.navigate(["teachers"]);
							break;
						case 2:
							this.router.navigate(["students"]);
							break;
					}
				}
			});
	}
}
