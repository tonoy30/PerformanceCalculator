import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "src/app/models/user";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;
	private USER = "USER";
	constructor(private http: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<User>(
			JSON.parse(localStorage.getItem(this.USER)!)
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): User {
		return this.currentUserSubject.value;
	}

	login(email: string, password: string) {
		return this.http
			.post<any>(`${environment.apiUrl}/auth/login`, {
				email,
				password,
			})
			.pipe(
				map((user: User) => {
					// login successful if there's a jwt token in the response
					if (user && user.token) {
						// store user details and jwt token in local storage to keep user logged in between page refreshes
						localStorage.setItem(this.USER, JSON.stringify(user));
						this.currentUserSubject.next(user);
					}
					return user;
				})
			);
	}
	register(email: string, password: string, role: number) {
		return this.http.post<any>(`${environment.apiUrl}/auth/register`, {
			email,
			password,
			role,
		});
	}
	logout() {
		localStorage.removeItem(this.USER);
		this.currentUserSubject.next(null);
		return this.currentUser;
	}
}
