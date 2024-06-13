import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../User';
import { TaskService } from '../../../task.service';
import { TeamMember } from '../../../project';

@Component({
  selector: 'app-create-task-modal',
  templateUrl:'./create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.css']
})
export class CreateTaskModalComponent {
  @Output() close = new EventEmitter<User | null>();
  @Input() show: boolean = false;
  @Output() close1 = new EventEmitter<void>();



  newTask: User = {
    projectId: 0,
    id: 0,
    title: '',
    assignedTo: '',
    assignDate: new Date(),
    dueDate: new Date(),
    priority: 'Low',
    status: 'Open',
    description: '',
    taskId: undefined
  };


  closeModal() {
    this.close.emit();
  }


  save() {
    console.log("Task to save: ", this.newTask);
    this.close.emit(this.newTask);

  }


  cancel() {
    this.close.emit(null);
  }
  
}
