
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectServiceService } from '../../project.service.service'; // Adjust the path as needed
import { ProjectP } from '../../projectp'; // Ensure this path is correct
import { Observable } from 'rxjs';
import { PmAuthService } from '../../pm-auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class PMProjectsComponent implements OnInit {
  
  
  projects: Observable<ProjectP[]> | undefined;

  constructor(private projectService: ProjectServiceService,
     private router: Router,
     private pmAuthService:PmAuthService
 
    ) {}

  ngOnInit(): void {
    const userId=this.pmAuthService.getUserId();
    this.projects = this.projectService.getProjectsByPM(userId);
    //this.
    // const userId=this.pmAuthService.getUserId();
    // console.log("this is pm user iD"+userId);
  }

  


  viewProjectDetails(projectId: number): void {
    
    this.router.navigate([`/project-manager/projects/${projectId}`]);
   // projects/:id/addMembers
  }

  viewTaskAssign(projectId: number): void {
    console.log("projectid in assign task is ",projectId);
    this.router.navigate([`projects/${projectId}/assignPmTask`]);
  }
  assignTask(projectId: number): void {
    this.router.navigate([`/project-manager/projects/${projectId}/task-assign`]);
  }
 

 

  createProject(){
    
  }
  redirectTo(projectId:number){
    this.router.navigate([`projects/${projectId}/addMembers`]);
  }



}
