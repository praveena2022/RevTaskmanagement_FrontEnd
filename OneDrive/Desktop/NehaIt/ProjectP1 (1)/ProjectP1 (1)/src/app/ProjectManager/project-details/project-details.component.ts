import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ProjectService } from '../project-service.service';
import { ProjectP, Task, TeamMember } from '../../projectp';
import { Observable } from 'rxjs';
import { ProjectServiceService } from '../../project.service.service';
import { UserServiceService } from '../../user-service.service';
import { UserServiceP } from '../../userp.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent{
  project:Observable<ProjectP> | any;
  allMembers: TeamMember[] = [];
  selectedMemberId: number | any;
  // teamMembers: TeamMember[] | undefined;

// newTask: Task = { Taskid: 0, TaskName: '',assignedTo: 0}
  //  status: '', priority: '', dueDate: new Date(), assignedTo: 0 };

constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectServiceService,private memberService:UserServiceP) {}

ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(projectId);
    this.projectService.getProjectById(projectId).subscribe((project)=> {
      this.project = project;
    });
   
    this.memberService.getAllMembers().subscribe((members) => {
      this.allMembers = members;
      console.log("this is project-details"+this.allMembers);
    });
    // this.projectService.getTeamMembers(projectId).subscribe((members)=>{
    //   this.allMembers=members;
    // });

}



addMemberToProject(projectId: number, memberId: number): void {
    // this.memberService.addMemberToProject(projectId, memberId).subscribe(() => {
    //   console.log(projectId+"hello"+memberId);
    this.projectService.addMemberToProject(projectId,memberId).subscribe(()=>{

    });

      // Reload project details or perform any other action after adding member to project
      this.projectService.getProjectById(projectId).subscribe((project) => {
        this.project = project;
      });
  }
}