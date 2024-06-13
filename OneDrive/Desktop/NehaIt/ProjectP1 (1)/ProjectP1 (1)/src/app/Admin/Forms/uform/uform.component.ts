import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uform',
  templateUrl: './uform.component.html',
  styleUrl: './uform.component.css'
})
export class UFormComponent {
  // userData = {
  //   username: '',
  //   email: '',
  //   password: ''
  // };

  // constructor(private http: HttpClient) {}

  // handleSubmit(): void {
  //   console.log(this.userData);
  //   // Send form data to create a new Project Manager
  //   this.http.post<any>('http://localhost:8080/team-members', this.userData)
  //     .subscribe((response: any) => {
  //       console.log('Project Manager created successfully:', response);
  //       // Add any further logic here, such as showing a success message or redirecting
  //     }, (error) => {
  //       console.log('Error creating Project Manager:', error);
  //       // Handle error, such as showing an error message to the user
  //     });
  // }


  userData = {
    username: '',
    email: '',
    password: '',
    role:''
  };

  constructor(private http: HttpClient,private router: Router) {}

  handleSubmit(): void {
    console.log(this.userData);
    // Send form data to create a new Project Manager
    this.http.post<any>('http://localhost:8080/team-members', this.userData)
      .subscribe((response: any) => {
        console.log('Project Manager created successfully:', response);
        alert("Successfully Created");
        this.router.navigate(['/AdminDashboard'])
        // Add any further logic here, such as showing a success message or redirecting
      }, (error) => {
        console.log('Error creating Project Manager:', error);
        // Handle error, such as showing an error message to the user
      });
    }
}
