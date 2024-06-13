import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService : AuthService) {
    
  }
  

 async onSubmit() {

  try {
    await this.authService.signIn(this.username, this.password);
    console.log('Sign-in successful!');
  } catch (error) {
    // this.errorMessage = error.message;
  }}
}
