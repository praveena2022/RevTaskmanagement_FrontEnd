import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {task} from '../../admin-auth';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-a-tasks',
  templateUrl: './a-tasks.component.html',
  styleUrl: './a-tasks.component.css'
})
export class ATasksComponent {
  tasks: task[] = [];

  constructor(private taskService: TaskService, private route:Router) {}

  ngOnInit(): void {
    console.log("working");
    
    this.taskService.getData().subscribe(
      (data: task[]) => { // Assuming data is of type Project[]
        this.tasks = data; // Assign the projects data from the API response directly
      },
      (error) => {
        console.log('Error fetching projects:', error);
        // Handle error scenario
      }
    );
  }
}
