import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';
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
  all_user_arr: User[] = [];
  constructor(
    private userService: UserService,
    private msgService: MsgService
  ) { }

  async saveSettings(){
    let usr = this.userService.getLoggedInUser();
    await this.userService.update(usr);
    this.msgService.addMessage("User settings saved!",1,"");
  } 

  addVacDays(days:number){
    let usr = this.userService.getLoggedInUser();
    usr.available_vac_days += (+days);
  }

  ngOnInit() {
    this.userService.getAllUsers()
      .then(users => { 
        this.all_user_arr = users;
      }); 
  }

}
