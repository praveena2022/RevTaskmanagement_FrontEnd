import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { MemAuthService } from '../../mem-auth.service';

@Component({
  selector: 'app-t-signup',
  templateUrl: './t-signup.component.html',
  styleUrl: './t-signup.component.css'
})
export class TSignupComponent {
  errorMessage: string = '';

  constructor(private memAuth:MemAuthService, private router: Router) {}

  login(username: string, password: string) {
    console.log('Login attempt with username:', username, 'and password:', password);
    if (!username || !password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    this.memAuth.login(username, password).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/tHome']);
          console.log('Login successful');
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
