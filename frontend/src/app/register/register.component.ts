import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };
  successMessage = '';
  errorMessage = '';

  constructor(private userService: UserService) {}

  register() {
    this.userService.registerUser(this.user).subscribe({
      next: res => {
        this.successMessage = res.message;
        this.errorMessage = '';
        this.user = { name: '', email: '', password: '' };
      },
      error: () => {
        this.errorMessage = 'Registration failed';
        this.successMessage = '';
      }
    });
  }
}
