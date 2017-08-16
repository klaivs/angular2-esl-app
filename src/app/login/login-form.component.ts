import { Component, OnInit } from '@angular/core';

import { User } from '../datastore/user/user';
import { UserService } from '../datastore/user/user.service';
import { MsgService } from '../msg/msg.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string = "test";
  password: string = "test";

  constructor(
    private userService: UserService,
    private msgService: MsgService,
  ) { }

  onSubmit() {
    this.userService.login(this.username, this.password)
      .then(ret => {
        if(ret){
          console.log("user logged in");
          this.username="";
          this.password="";
        }
      })
      .catch(err => {
        this.msgService.addMessage(err, 3, "Warning");
      });
  }

  ngOnInit() {
  }
}
