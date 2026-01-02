import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  fname: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  c_password: string = '';
  showPassword: boolean = false;
  showConfirmPassword = false;
   constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

    toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    console.log('signup attempt:', {
      fname: this.fname,
      phone: this.phone,
      email: this.email,
      password: this.password,
      c_password: this.c_password,
    });
     this.router.navigate(['/login']);
    // Add your signup logic here
  }

  onContactAdmin() {
    console.log('Contact administrator clicked');
    // Add contact admin logic here
  }
}