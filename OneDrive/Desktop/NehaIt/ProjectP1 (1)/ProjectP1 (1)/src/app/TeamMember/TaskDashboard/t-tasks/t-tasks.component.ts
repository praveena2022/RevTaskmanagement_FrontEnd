import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { ProjectP } from '../../../projectp';
// import { Task } from '../../../Task';
// import { Task } from '../../../Proj'
// import { TaskpService } from '../../../taskp.service';
// import { ProjectServiceService } from '../../../project.service.service';
import { Task, TeamMember } from '../../../project';
import { ProjectService } from '../../../project.service';
import { TaskService } from '../../../task.service';
import { UserServiceP } from '../../../userp.service';

@Component({
  selector: 'app-t-tasks',
  templateUrl: './t-tasks.component.html',
  styleUrl: './t-tasks.component.css'
})
export class TTasksComponent {

  showForm = false;
  showEdit = false;
  showChangeStatus=false;
  project: ProjectP | any;
  
teamMembers: TeamMember[] | any =[];
selectedMemberId: number | any;
  // pprojectId: numberprojectId: numberrojectId: number =0;
//  tasks:Observable<Task> | undefined;
// tasks: Observable<Task[]> | undefined;
tasks: Observable<Task[]> | any;

  constructor(
    private taskService:TaskService,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskpService:UserServiceP,
    private memberService:UserServiceP
    
    
  ) {}
  newTask: Task = {
    id:0,
    title: '',
    description: '',
    status: 'assigned',
    priority: '', // Initialize with default value if needed
    assignDate: new Date(), // Initialize with current date if needed
    dueDate: new Date(), // Initialize with default value if needed
    assignedTo: '', // Initialize with default value if needed
    projectId: 0 // Initialize with project ID
  };

  toggleFormVisibility(): void {
    this.showForm = !this.showForm;
  }
  
  

  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    
    console.log(`roject ID from route: ${projectId}`);
  this.projectService.getProjectById(projectId).subscribe((project) => {
    this.project = project;
    console.log('Project data set in component: ', this.project);
    

   });

const projectId1 = Number(this.route.snapshot.paramMap.get('id'));

console.log("project id in task-assignnn" +projectId1);
    // this.tasks=this.taskpService.getTasks(projectId1);
    // console.log(this.task);

    
    this.taskService.getTasks(projectId).subscribe(tasks => {
      this.tasks = tasks;
      // console.log("inside tasks subscuber" +this.tasks);
      
    });
    // this.taskpService.getAllMembers().subscribe(members=>{
    //   this.teamMembers=members;
    // })
   
    this.memberService.getAllMembers().subscribe((members) => {
      this.teamMembers = members;
      console.log("this is project-details"+this.teamMembers);
    });
  
     
    
  // }
  }

  createTask(): void {
    this.taskService.createTask(this.newTask).subscribe(createdTask => {
      console.log('Task created:', createdTask);
      this.newTask=createdTask;
      
      // Optionally, refresh tasks list or perform other actions
    });
  }
//   createTask(): void {
//     // if (this.selectedMemberId !== null) {
//       this.newTask.assignedTo = this.selectedMemberId;
//       console.log("selected mem"+this.selectedMemberId);
//       this.newTask.projectId = this.project.id;
//       this.newTask.assignDate = new Date();

// this.taskpService.createTask(this.newTask).subscribe(createdTask => {
//         console.log('Task created:', createdTask);
//        this.tasks.push(createdTask);
//     //  this.newTask=createdTask;
       
//       });
//     }
  editTask():void{
    this.taskService.updateTask(this.newTask).subscribe(editedTask => {
      console.log('Task Edited', editedTask);
    })
  }

  changeStatus():void{
    this.taskService.updateTask(this.newTask).subscribe(changedStatus =>{
      console.log('Status Changed',changedStatus);
    })
  }
  // changeStatus(): void {
  //   this.taskpService.updateTask(this.newTask).subscribe(changedTask => {
  //     console.log('Status Changed:', changedTask);
  //     // Find the index of the changed task in the tasks array
  //     const index = this.taskpService.findIndex(task => task.id === changedTask.id);
  //     if (index !== -1) {
  //       // Update the status of the task in the tasks array
  //       this.tasks[index].status = changedTask.status;
  //       console.log('Tasks after status change:', this.tasks);
  //     } else {
  //       console.log('Task not found in tasks array.');
  //     }
  //     // Optionally, perform additional actions such as closing the form
  //     this.showChangeStatus = false;
  //   });
  // }  
handleTask():void {
  console.log("clicked")
    this.showEdit = !this.showEdit;

}
handleStatus():void {
  console.log("status hand");
  
    this.showChangeStatus = !this.showChangeStatus;

}


}
