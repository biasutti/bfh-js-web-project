import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import {SharedDataService} from './shared-data.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Todo} from '../_models/todo';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // REST Endpoint configuration
  private _baseUrl = 'http://distsys.ch:1450';
  private _todosUrl = this._baseUrl + '/todos';

  constructor(private http: HttpClient,
              private sharedData: SharedDataService,
              private messageService: MessageService) {
  }

  public isAuthenticated(): boolean {
    return this.sharedData.getLoggedIn();
  }

  processLogin(): Observable<Todo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.sharedData.getLoginToken(),
        observe: 'response'
      }),
    };
    return this.http.get<Todo[]>(this._todosUrl, httpOptions);
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
