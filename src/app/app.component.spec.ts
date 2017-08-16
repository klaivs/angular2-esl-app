import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';
import { APP_BASE_HREF } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './login/login-form.component';
import { MsgComponent } from './msg/msg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VacationsComponent } from './vacations/vacations.component';
import { VacationsAddComponent } from './vacations-add/vacations-add.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { User } from './datastore/user/user';
import { UserService } from './datastore/user/user.service';
import { MsgService } from './msg/msg.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userServiceStub = {
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
      getMessage(){return new Subject<any>().asObservable();}
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterModule,
        AppRoutingModule,
        FormsModule,
        DatePickerModule
      ],
      declarations: [
        AppComponent,
        LoginFormComponent,
        MsgComponent,
        DashboardComponent,
        VacationsComponent,
        VacationsAddComponent,
        UserSettingsComponent
      ],
      providers:[
        {provide: APP_BASE_HREF, useValue : '/' },
        {provide: UserService, useValue: userServiceStub },
        {provide: MsgService, useValue: msgServiceStub }
      ]
    }).compileComponents();
  }));
  let de:DebugElement;
  let el:HTMLElement;
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display original title', () => {
    de = fixture.debugElement.query(By.css('span.title'));
    el = de.nativeElement;
    expect(el.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    de = fixture.debugElement.query(By.css('span.title'));
    el = de.nativeElement;
    let new_title = "Exigen Services Vacation App";
    component.title = new_title;
    fixture.detectChanges();
    expect(el.textContent).toContain(new_title);
  });

});
