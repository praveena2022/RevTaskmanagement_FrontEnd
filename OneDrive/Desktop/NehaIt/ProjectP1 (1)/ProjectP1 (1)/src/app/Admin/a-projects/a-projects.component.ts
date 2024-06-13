import { Component, OnInit } from '@angular/core';
import { AdminProjects } from '../../Interface/AdminProjects';
import { AdminProjectService } from '../../Service/admin-projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-projects',
  templateUrl:'./a-projects.component.html',
  styleUrls: ['./a-projects.component.css'] // Corrected property name
})
export class AProjectsComponent implements OnInit {
  projects: AdminProjects[] = []; // Assuming AdminProjects is the interface for projects

  constructor(private projectService: AdminProjectService, private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }
    
  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data: AdminProjects[]) => {
        this.projects = data;
      },
      (error: any) => {
        console.log('Error fetching projects:', error);
        // Handle error scenario
      }
    );
  }
  handledesc(){
    
    this.router.navigate([''])
  }
}
