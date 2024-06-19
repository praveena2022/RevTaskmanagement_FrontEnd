import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../project.service';
// import { project } from '../../../project';
import { Observable } from 'rxjs';
import { MemberProjects } from '../../../MemberProjects';
import { ProjectP } from '../../../projectp';
import { MemAuthService } from '../../../mem-auth.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
  
  constructor(
    private router: Router,
    private projectService: ProjectService,
    private tmauthService:MemAuthService
  ) { }
  
 // projects:MemberProjects[]=[];
  // projects2:ProjectP[]=[];
  projects: Observable<ProjectP[]> | any;


  ngOnInit(): void {
   // this.projects2 = this.projectService.getProjectsByTM();
   const userId=this.tmauthService.getUserId();
   this.projects = this.projectService.getProjectsByTM(userId);
    // this.loadProjects();
  }



  // loadProjects(): void {
  //   this.projectService.getAllProjects().subscribe(
  //     (data: MemberProjects[]) => {
  //       console.log(data);
  //       this.projects = data;
  //     },
  //     (error: any) => {
  //       console.log('Error fetching projects:', error);
  //       // Handle error scenario
  //     }
  //   );
  // }

  viewtasks(projectId:number):void{
    this.router.navigate([`/projects/${[projectId]}/tTasks`]);
  }
  createProject(){

  }
 
}
