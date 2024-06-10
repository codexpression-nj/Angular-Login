import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-intro',
  standalone: true,
  templateUrl: './signup-intro.component.html',
  styleUrls: ['./signup-intro.component.css']
})
export class SignupIntroComponent {
  @Output() toggleSignupForm = new EventEmitter<void>();

  onToggleForm() {    
    this.toggleSignupForm.emit();
  }
}
