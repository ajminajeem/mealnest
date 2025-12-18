// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;
   constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Login attempt:', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
     this.router.navigate(['/dashboard']);
    // Add your login logic here
  }

  onForgotPassword() {
    console.log('Forgot password clicked');
    // Add forgot password logic here
  }

  onContactAdmin() {
    console.log('Contact administrator clicked');
    // Add contact admin logic here
  }
}