import { Component, OnInit } from '@angular/core';

//import { LoginFormComponent } from '../login/login-form.component';
import { User } from '../datastore/user/user';
import { UserService } from '../datastore/user/user.service';
import { MsgService } from '../msg/msg.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private msgService: MsgService
  ) { }

  saveSettings(){
    this.userService.update(this.userService.getLoggedInUser())
      .then(
        () => this.msgService.addMessage("User settings saved!",1,"")
      );
  }

  ngOnInit() {
    
  }

}
