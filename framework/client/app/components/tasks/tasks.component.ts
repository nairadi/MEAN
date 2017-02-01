import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
//import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
	constructor(private taskService:TaskService){
		this.taskService.getTasks()
		.subscribe(tasks =>{
			console.log(tasks);
		});
	}
}
