import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {LoginComponent} from './login/login.component';

import {
  AuthGuardService as AuthGuard
} from './_services/authguard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'todo/add', component: TodoAddComponent},
  {path: 'todo/detail/:id', component: TodoEditComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
