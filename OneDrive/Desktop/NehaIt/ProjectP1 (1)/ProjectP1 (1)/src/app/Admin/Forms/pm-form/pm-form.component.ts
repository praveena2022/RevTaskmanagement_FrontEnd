import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pm-form',
  templateUrl: './pm-form.component.html',
  styleUrl: './pm-form.component.css'
})
export class PmFormComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  handleSubmit(): void {
    console.log(this.userData);
    // Send form data to create a new Project Manager
    this.http.post<any>('http://localhost:8080/project-managers/create-project-manager', this.userData)
      .subscribe((response: any) => {
        console.log('Project Manager created successfully:', response);
        alert("Successfully Created")
        this.router.navigate(['/AdminDashboard'])
        // Add any further logic here, such as showing a success message or redirecting
      }, (error) => {
        console.log('Error creating Project Manager:', error);
        // Handle error, such as showing an error message to the user
      });
      
  }


  // getMEthod

}

