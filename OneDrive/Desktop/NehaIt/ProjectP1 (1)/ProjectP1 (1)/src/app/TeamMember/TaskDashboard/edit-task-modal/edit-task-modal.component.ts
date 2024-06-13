


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../User';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {
  @Input() task: User | null = null;
  @Output() close = new EventEmitter<User | null>();

  updatedTask: User | null = null;

  ngOnInit() {
    if (this.task) {
      this.updatedTask = { ...this.task };
    }
  }

  save() {
    if (this.updatedTask) {
      this.close.emit(this.updatedTask);
    }
  }
 

  cancel() {
    this.close.emit(null);
  }


}



