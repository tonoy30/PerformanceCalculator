import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorInterceptor } from "./error.interceptor";
import { JwtInterceptor } from "./jwt.interceptor";
import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "./material.module";
import { CoreModule } from "./modules/core/core.module";
import { FeaturesModule } from "./modules/features/features.module";
import { PrimeNgModule } from "./primeng.module";
import { RegisterComponent } from "./register/register.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";

@NgModule({
	declarations: [AppComponent, LoginComponent, RegisterComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CoreModule,
		MaterialModule,
		FeaturesModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		PrimeNgModule,
	],

	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		AuthGuardService,
		AuthService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
