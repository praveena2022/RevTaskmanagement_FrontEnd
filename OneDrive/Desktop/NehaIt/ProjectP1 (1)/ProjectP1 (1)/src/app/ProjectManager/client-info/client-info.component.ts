import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { client } from '../../projectp';
import { Observable } from 'rxjs';
import { project } from '../../admin-auth';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class PMClientInfoComponent implements OnInit {
  clients: client[] = [];
  projects:project[]=[];

constructor(private clientService: ClientService) { }

ngOnInit(): void {
 
    this.clientService.getclients().subscribe((clients)=>
    this.clients=clients
    );
  }

getProjectsByClientId(clientId:number){
    console.log("clientId:"+clientId);
    this.clientService.getProjectsbyClientId(clientId).subscribe((projects)=>
    {
      this.projects=projects;
      console.log(this.projects);
    })

}
}