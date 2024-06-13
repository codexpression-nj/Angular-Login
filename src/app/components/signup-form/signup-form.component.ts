import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

   constructor(private authService:AuthService) {
   }

 async onSubmit() {

    try {
      await this.authService.signUp(this.email, this.password);
      console.log('Sign-in successful!');
    } catch (error) {
      // this.errorMessage = error.;
    }  }
}
