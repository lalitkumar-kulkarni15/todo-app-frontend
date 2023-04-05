import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

interface TodoView {
  id: number;
  name: string;
  description: string;
  tasks: any[];
}

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  todos: TodoView[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<TodoView[]>('http://localhost:8080/todo').subscribe(
      response => this.todos = response,
      error => console.error(error)
    );
  }

  deleteTodo(id: number) {
    this.http.delete(`http://localhost:8080/todo/${id}`).subscribe(
      response => {
        // Handle success, update the todos array or perform any other necessary actions
        console.log('Todo deleted successfully');
        window.location.reload();
      },
      error => {
        // Handle error, display error message or perform any other necessary actions
        console.error('Error deleting todo:', error);
      }
    );
  }

  updateTodo(todo: TodoView) {
    // Add any necessary logic for updating todo
    console.log(todo);
    // Navigate to the "Add Todo" component's route

    name: todo.name
    description: todo.description
    tasks: todo.tasks,
    this.router.navigate(['/app-todo-add'], { state: { todo: todo } });
  }
}
