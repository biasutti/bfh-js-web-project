import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {MessageService} from './message.service';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _baseUrl = 'http://distsys.ch:1450';
  private _todosUrl = this._baseUrl + '/todos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic QWxpY2U6Qm9iOTc='
    })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._todosUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched todos')),
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this._todosUrl}/${id}`;
    return this.http.get<Todo>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`fetched todo id=${id}`)),
        catchError(this.handleError<Todo>(`getTodo id=${id}`))
      );
  }

  /** PUT: update the todo on the server */
  updateTodo(todo: Todo): Observable<any> {
    const url = `${this._todosUrl}/${todo.id}`;
    return this.http.put(url, todo, this.httpOptions).pipe(
      tap(_ => this.log(`updated todo id=${todo.id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }

}
