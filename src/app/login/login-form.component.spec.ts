import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginFormComponent } from './login-form.component';
import { User } from '../datastore/user/user';
import { UserService } from '../datastore/user/user.service';
import { MsgService } from '../msg/msg.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let test_usr = new User();
    test_usr.id=1;
    test_usr.username = 'test_usern';
    test_usr.password = 'test_passw';
    test_usr.firstname = 'test_firstname';
    test_usr.lastname = 'test_lastname';
  beforeEach(async(() => {
    let userServiceStub = {
      login(username:string, password:string):Promise<User> {
        return new Promise(()=>{
          return test_usr;
        });
      },
      getLoggedInUser():User{ return test_usr; }
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
  let de:DebugElement;
  let el:HTMLElement;
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show loginform/welcome msg depending on userService.getLoggenInUser() ret value',inject([UserService], (service) => {
    de = fixture.debugElement.query(By.css('#user_actions'));
    expect(de).not.toBe(null);
    let el = de.nativeElement;
    expect(el.textContent).toContain('Hello '+test_usr.firstname+' '+test_usr.lastname+'!');
    spyOn(service,"getLoggedInUser").and.returnValue(null);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('#user_actions'));
    expect(de).toBe(null);
    de = fixture.debugElement.query(By.css('#loginForm'));
    expect(de).not.toBe(null);
  }));
});
