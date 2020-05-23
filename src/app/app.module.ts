import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoEditComponent,
    MessagesComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
