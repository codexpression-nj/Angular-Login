import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  
  constructor(private authService : AuthService, private router:Router) {
    
  }

 async onSubmit() {
  try {
    (await this.authService.signIn(this.username, this.password)).user;
    console.log('signin');
    // this.rout
    
  } catch (error) {
  }
}
}
