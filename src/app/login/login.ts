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
import { AuthService } from '../../core/services/auth.service';
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
   constructor(private router: Router, private authService: AuthService) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
  if (!this.email || !this.password) {
    return;
  }

  const payload = {
    email: this.email,
    password: this.password,
    remember_me: this.rememberMe
  };

  this.authService.login(payload).subscribe({
    next: (res: any) => {
      // Save token
      if (this.rememberMe) {
        localStorage.setItem('token', res.token);
      } else {
        sessionStorage.setItem('token', res.token);
      }

      // Navigate after success
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error('Login failed', err);
      alert(err.error?.message || 'Invalid login credentials');
    }
  });
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