import { Component } from '@angular/core';
import { PmAuthService } from '../../pm-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pmlogin',
  templateUrl: './pmlogin.component.html',
  styleUrl: './pmlogin.component.css'
})
export class PmloginComponent {

  errorMessage: string = '';

  constructor(private pmauthservice: PmAuthService, private router: Router) {}

  login(username: string, password: string) {
   // console.log('Login attempt with username:', username, 'and password:', password);
    if (!username || !password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    this.pmauthservice.login(username, password).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/PMDashboard']);
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
