import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ProjectManagerService } from '../../Service/project-manager-service.service';

@Component({
  selector: 'app-a-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrl: './a-dashboard.component.css'
})
export class ADashboardComponent implements OnInit{

  projectManagers: any[] = [];
  
  constructor(private projectManagerService: ProjectManagerService) {}

  ngOnInit(): void {

    this.loadProjectManagers();
  }


  

  loadProjectManagers(): void {
    this.projectManagerService.getAllProjectManagers().subscribe(
      (data) => {
        this.projectManagers = data;
      },
      (error) => {
        console.log('Error fetching project managers:', error);
      }
    );
  }
}
