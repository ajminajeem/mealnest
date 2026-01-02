import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPasswordComponent {
  email: string = '';
  code: string ='' ;
  password: string = '';
  confirmPassword:string = '';
    showPassword: boolean = false;
  showConfirmPassword = false;
  step = 1;

  constructor(private router: Router) {}
  sendCode() {
    this.step = 2;
  }

  verifyCode() {
    this.step = 3;
  }

    togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

    toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

resetPassword() {
  if (this.password !== this.confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  this.step = 4; // show success page
}
  onSubmit() {
    console.log('Password change attempt:', {
      email: this.email,
      code: this.code,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
    this.router.navigate(['/login']);
    // Add your forgot password logic here
  }
}
