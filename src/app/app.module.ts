import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule }   from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { VacationsComponent } from './vacations/vacations.component';
import { VacationsAddComponent } from './vacations-add/vacations-add.component';
import { LoginFormComponent } from './login/login-form.component';
import { UserDataStore } from './datastore/user/user.datastore';
import { UserService } from './datastore/user/user.service';
import { MsgService } from './msg/msg.service';
import { MsgComponent } from './msg/msg.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VacationsComponent,
    VacationsAddComponent,
    LoginFormComponent,
    MsgComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(UserDataStore),
    NgbModule.forRoot(),  
    AppRoutingModule
  ],
  providers: [UserService, MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
