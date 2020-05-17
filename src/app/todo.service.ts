import {Injectable} from '@angular/core';
import {TODOS} from './mock-todos';
import {Todo} from './todo';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private messageService: MessageService) {
  }

  getTodos(): Observable<Todo[]> {
    this.messageService.add('TodoService: fetched todos');
    return of(TODOS);
  }
}
