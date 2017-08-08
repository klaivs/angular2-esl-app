import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { LoginFormComponent } from './login-form.component';
import { User } from '../datastore/user/user';
import { UserService } from '../datastore/user/user.service';
import { MsgService } from '../msg/msg.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    let userServiceStub = {
      login(username:string, password:string) {return true},
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
      imports:[
        FormsModule
      ],
      declarations: [ LoginFormComponent ],
      providers:    [ 
        {provide: UserService, useValue: userServiceStub },
        {provide: MsgService, useValue: msgServiceStub }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
