import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoComponent } from './todo-add/todo-add.component';

const routes: Routes = [ {path: 'app-todo-add', component: TodoComponent}, { path: 'todo-view', component: TodoViewComponent }, { path: 'todo-view1', component: TodoViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
