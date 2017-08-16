import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import 'rxjs/add/operator/toPromise';

import { UserSettingsComponent } from './user-settings.component';
import { User } from '../datastore/user/user';
import { UserService } from '../datastore/user/user.service';
import { MsgService } from '../msg/msg.service';

describe('UserSettingsComponent', () => {
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;
  let test_usr = new User();
    test_usr.id=1;
    test_usr.username = 'test_usern';
    test_usr.password = 'test_passw';
    test_usr.firstname = 'test_firstname';
    test_usr.lastname = 'test_lastname';
  function delay(milliseconds, obj:User):Promise<User> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(obj);
        }, milliseconds);
    });
  }
  beforeEach(async(() => {
    let userServiceStub = {
      update(user:User):Promise<User>{
        console.log("dddd");
        return delay(3000,user);
        //return Promise.resolve(user);
      },
      getLoggedInUser():User{return test_usr; }
    };
    let msgServiceStub = {
      addMessage(message:string, type:number, title:string){}
    };

    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ UserSettingsComponent ],
      providers:    [ 
        {provide: UserService, useValue: userServiceStub },
        {provide: MsgService, useValue: msgServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('#saveSettings should work',async(inject([UserService, MsgService], (userService, msgService) => {
    spyOn(userService,"update");
    spyOn(msgService,"addMessage");
    component.saveSettings().then(()=>{
      expect(userService.update).toHaveBeenCalled();
      expect(msgService.addMessage).toHaveBeenCalled();
    });
  })));
});
