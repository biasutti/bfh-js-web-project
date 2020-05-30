import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../_models/todo';
import {TodoService} from '../_services/todo.service';
import {Location} from '@angular/common';
import {Category} from '../_models/category';
import {SharedDataService} from '../_services/shared-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todo: Todo = Object.create(null);
  categories: Category[] = [];

  constructor(private todoService$: TodoService,
              private location: Location) {
  }

  getCategories(): void {
    this.todoService$.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  save(): void {
    this.todoService$.createTodo(this.todo)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
