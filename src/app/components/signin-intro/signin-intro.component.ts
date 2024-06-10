import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signin-intro',
  standalone: true,
  templateUrl: './signin-intro.component.html',
  styleUrls: ['./signin-intro.component.css']
})
export class SigninIntroComponent {
  @Output() toggleSigninForm = new EventEmitter<void>();

  onToggleForm() {
    this.toggleSigninForm.emit();     
  }
}
