import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../client.service';
import { ProjectP, client } from '../../projectp';
import { ProjectServiceService } from '../../project.service.service';
import { PmAuthService } from '../../pm-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  project: ProjectP = {
    id: 0,
    name: '',
    description: '',
    clientId: 0,
    
    assignedDate: new Date(),
    dueDate: new Date(),
  };
  clients: client[] = [];
  showForm:boolean = false;

constructor(
    private projectService: ProjectServiceService,
    private clientService: ClientService,
    private pmAuthService:PmAuthService,
    
 
  ) {}

ngOnInit(): void {
    this.clientService.getclients().subscribe(clients => {
      this.clients = clients;
    });
    

  }


  toggleFormVisibility(): void {
    this.showForm = !this.showForm;
  }
  
  onSubmit(): void {
    const projectToSave: ProjectP = {
      ...this.project,
      dueDate: new Date(this.project.dueDate),
      assignedDate: new Date(this.project.assignedDate),
    };
    const userId=this.pmAuthService.getUserId();
    console.log("this is pm user iD"+userId);
   
    // const userEmail=this.pmAuthService.getEmail();

this.projectService.createProject(projectToSave,userId).subscribe(result => {
      console.log('Project created:', result);

});
  }
}

