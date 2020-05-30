import {Injectable} from '@angular/core';
import {Todo} from '../_models/todo';
import {User} from '../_models/user';

@Injectable({
    providedIn: 'root',
})
export class SharedDataService {

  private _loggedIn;
  private _todos: Todo[];
  private _user: User;

  public setTodoData(todos: Todo[]) {
    this._todos = todos;
  }

  public getTodosData() {
    return this._todos;
  }

  public setUserData(user: User) {
    this._user = user;
  }

  public getUserData() {
    return this._user;
  }

  public getLoggedIn() {
    return this._loggedIn;
  }

  public setLoggedIn(loggedIn: boolean) {
    this._loggedIn = loggedIn;
  }

  public getLoginToken(): string {
    return 'Basic ' + btoa( this._user.name + ':' + this._user.password);
  }

  constructor() {
    this._loggedIn = false;
    this._user = {name: 'username', password: 'password'};
    this._todos = [];
  }
}
