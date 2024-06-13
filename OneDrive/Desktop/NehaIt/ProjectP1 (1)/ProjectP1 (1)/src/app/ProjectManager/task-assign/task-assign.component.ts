
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectServiceService } from '../../project.service.service';
import { ProjectP, Task, TeamMember } from '../../projectp';
import { TaskpService } from '../../taskp.service';
import { Observable } from 'rxjs';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css']
})
export class TaskAssignComponent implements OnInit {
  
  showForm:boolean = false;
  project: Observable<ProjectP> | any;

tasks: Task[] = [];

teamMembers: TeamMember[] | any =[];
selectedMemberId: number | any;
selectedMember:TeamMember | any;




  constructor(
    private taskpService:TaskpService,
    private route: ActivatedRoute,
    private projectService: ProjectServiceService,
    private  userService:UserServiceService
    
   ) {}
  newTask: Task = {
    title: " ",
    description: '',
    status: 'assigned',
    priority: '', // Initialize with default value if needed
    assignDate: new Date(), // Initialize with current date if needed
    dueDate: new Date(), // Initialize with default value if needed
   // assignedTo:'',
    assignTo:0,
   
  };

  toggleFormVisibility(): void {
    this.showForm = !this.showForm;
  }
  
  

  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    
   
  this.projectService.getProjectById(projectId).subscribe(project => {
    this.project = project;
   });
   this.taskpService.getTasks(projectId).subscribe(tasks => {
    
    this.tasks = tasks;
  
    console.log("the tasks are"+tasks);
   });
 this.projectService.getTeamMembers(projectId).subscribe((members) => {
      this.teamMembers = members;
    
       });
    }

  createTask(projectId: number): void {
    if (this.selectedMemberId) {
      this.userService.getTeamMemberById(this.selectedMemberId).subscribe((member) => {
        this.selectedMember = member;
        this.newTask.assignTo = this.selectedMember.id; // Use ID here
       
  
        this.newTask.assignDate = new Date();
  
        const memberIdNumber: number = +this.selectedMemberId;
        this.taskpService.createTask(this.newTask, memberIdNumber, projectId)
          .subscribe(response => {
            console.log('Task created successfully', response);
            alert('Task created successfully');
            this.taskpService.getTasks(projectId).subscribe(tasks => {
              this.tasks = tasks;
         
            });
          });
      });
     
    }
  }
}
