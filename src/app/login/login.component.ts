import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {AuthService} from '../_services/auth.service';
import {SharedDataService} from '../_services/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authService$: AuthService,
              private sharedData: SharedDataService,
              private router: Router) {
  }

  login() {
    console.log('Do login!');
    if (this.user !== undefined) {
      this.sharedData.setUserData(this.user);
      this.authService$.processLogin().subscribe(
        todos => {
          this.sharedData.setLoggedIn(true);
          this.sharedData.setTodoData(todos);
          this.router.navigate(['todos']);
        }, (err) => {
          console.log('There was a problem logging you in');
          console.log(err);
        });
    }
  }

  ngOnInit(): void {
    this.user = this.sharedData.getUserData();
  }

}
