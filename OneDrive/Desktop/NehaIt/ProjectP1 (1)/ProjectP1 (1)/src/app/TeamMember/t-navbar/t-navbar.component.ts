import { Component, OnInit } from '@angular/core';
// import { project } from '../../project';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-t-navbar',
  templateUrl: './t-navbar.component.html',
  styleUrl: './t-navbar.component.css'
})
export class TNavbarComponent implements OnInit{


  constructor(private projectService: ProjectService, private router: Router) { }
  ngOnInit(): void {
    
  }




  logout(): void {
    // Implement logout logic here (e.g., clearing tokens, redirecting to login)
    this.router.navigate(['/']);
  }

  redirect(): void {
    this.router.navigate(['./tUserDashboard']);
  }
}
