import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../../admin-auth.service';
import { AdminAuth } from '../../../admin-auth';




@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {

  errorMessage: string = '';


  constructor(private adminAuthService: AdminAuthService,private router:Router) {}

  login(username: string, password: string) {
    console.log('Login attempt with username:', username, 'and password:', password);
    if (!username || !password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    this.adminAuthService.login(username, password).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/AdminHome'])
          console.log('Login successful');
          // Handle successful login (e.g., redirect to another page)
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.log(this.errorMessage);
        }
      },
      error => {
        this.errorMessage = 'An error occurred during login. Please try again later.';
        console.log(this.errorMessage, error);
  }
);
}
}