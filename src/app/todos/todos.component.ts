import {Component, OnInit} from '@angular/core';
import {Todo} from '../_models/todo';
import {TodoService} from '../_services/todo.service';
import {SharedDataService} from '../_services/shared-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private sharedData: SharedDataService,
              private todoService: TodoService) {
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }

}
