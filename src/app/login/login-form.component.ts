import { Component, OnInit } from '@angular/core';

import { User } from '../datastore/user/user';
import { UserService } from '../datastore/user/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  thisUser: User;
  login: User = {
    //username:'', password:''
    username:'test', password:'test'
  }
  msg: string;

  constructor(
    private userService: UserService
  ) { }

  onSubmit() {
    this.userService.login(this.login.username, this.login.password)
      .then(ret => {
        if(ret) this.thisUser = ret;
      })
      .catch(err => this.msg = err);
  }

  onLogout(){
    delete this.thisUser;
    /*
    this.login.username='';
    this.login.password='';
    */
    this.login.username='test';
    this.login.password='test';
  }

  oncloseMsg(){
    delete this.msg;
  }
  ngOnInit() {
  }
}
