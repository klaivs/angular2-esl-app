import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import 'rxjs/add/operator/toPromise';

import { UserSettingsComponent } from './user-settings.component';
import { User } from '../datastore/user/user';
import { UserService } from '../datastore/user/user.service';
import { MsgService } from '../msg/msg.service';

describe('UserSettingsComponent', () => {
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(async(() => {
    let userServiceStub = {
      update(user:User):Promise<User>{
        return Promise.resolve(user);
      },
      getLoggedInUser():User{
        var ret = new User();
        ret.id=1;
        ret.username = 'test_usern';
        ret.password = 'test_passw';
        ret.firstname = 'test_firstname';
        ret.lastname = 'test_lastname';
        return ret;
      }
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
});
