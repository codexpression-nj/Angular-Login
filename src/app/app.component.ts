import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
// import { Signu } from './signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninIntroComponent } from './components/signin-intro/signin-intro.component';
import { SignupIntroComponent } from './components/signup-intro/signup-intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SignupFormComponent, SigninFormComponent, SigninIntroComponent, SignupIntroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignup: boolean = true;

  onToggleForm() {
    this.isSignup = !this.isSignup;
    console.log('this.isSign' +  this.isSignup);

  }
}
