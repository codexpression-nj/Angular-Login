import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
// import { Signu } from './signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninIntroComponent } from './components/signin-intro/signin-intro.component';
import { SignupIntroComponent } from './components/signup-intro/signup-intro.component';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { HomeComponent } from "./components/home/home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, SignupFormComponent, SigninFormComponent, SigninIntroComponent, SignupIntroComponent, HomeComponent, ProductListComponent]
})
export class AppComponent {
  isSignup: boolean = true;
  isLoggedIn = true;

  constructor(private authService:AuthService){

  }

  onToggleForm() {
    this.isSignup = !this.isSignup;
  }
}
