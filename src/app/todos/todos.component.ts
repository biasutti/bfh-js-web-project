import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService$: TodoService) {
  }

  getTodos(): void {
    this.todoService$.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }

}
