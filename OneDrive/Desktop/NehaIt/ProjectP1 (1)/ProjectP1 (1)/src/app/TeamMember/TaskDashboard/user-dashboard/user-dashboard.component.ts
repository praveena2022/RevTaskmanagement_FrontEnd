import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../user-service.service';
import { User } from '../../../User';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  tasks: User[] = [];
  selectedTask: User | null = null;
  showEditTaskModal = false;
  showChangeStatusModal = false;
  showCreateTaskModal = false;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.userService.getTasks().subscribe(response => {
      this.tasks = response;
    });
  }
       
  openEditTaskModal(task: User) {
    this.selectedTask = task;
    this.showEditTaskModal = true;
  }

  closeEditTaskModal(updatedTask: User | null) {
    if (updatedTask) {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
        this.userService.updateTask(updatedTask).subscribe(() => {
          this.updateTaskColumns();
        });
      }
    }
    this.showEditTaskModal = false;
    this.selectedTask = null;
  }

  openChangeStatusModal(task: User) {
    this.selectedTask = task;
    this.showChangeStatusModal = true;
  }

  closeChangeStatusModal(updatedTask: User | null) {
    if (updatedTask) {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
        this.userService.updateTask(updatedTask).subscribe(() => {
          this.updateTaskColumns();
        });
      }
    }
    this.showChangeStatusModal = false;
    this.selectedTask = null;
  }


  closeCreateTaskModal(newTask: User | null) {
    if (newTask) {
      this.tasks.push(newTask!);
      this.updateTaskColumns();
    }
    this.showCreateTaskModal = false;
  }

  private updateTaskColumns() {
    // Trigger change detection and refresh view
    this.tasks = [...this.tasks];
  }

  openCreateTaskModal() {
    this.showCreateTaskModal = true;
  }

}
  