import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

interface Task {
  name: string;
  description: string;
}

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoComponent {
  
  name: string = '';
  description: string = '';
  taskName: string = '';
  taskDescription: string = '';
  tasks: Task[] = [];

  constructor(private http: HttpClient, private router: Router) { }
  
  onSubmit() {

    if(this.name ==='' || this.description ===''){
      return;
    }

    const body = {
      name: this.name,
      description: this.description,
      tasks: this.tasks
    };
    this.http.post('http://localhost:8080/todo', body).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
    this.router.navigate(['/todo-view']);
  }

  addTask() {

    if(this.taskName==='' && this.taskDescription===''){
      return;
    }

    const task = {
      name: this.taskName,
      description: this.taskDescription
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDescription = '';
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }

    this.router.navigate(['/todo-view']);
  }

 
}
