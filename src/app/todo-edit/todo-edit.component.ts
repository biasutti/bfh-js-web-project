import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Todo} from '../_models/todo';
import {TodoService} from '../_services/todo.service';
import {SharedDataService} from '../_services/shared-data.service';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private route: ActivatedRoute,
              private todoService$: TodoService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService$.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  save(): void {
    this.todoService$.updateTodo(this.todo)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
