import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task',
  template: `
  <div class="list-item">
    <input type="text" [value]="task.title" readonly="true">
  </div>
  `,
  styles: []
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;
  @Output()
  pinTask: EventEmitter<any> = new EventEmitter();
  @Output()
  archiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
