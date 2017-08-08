import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { MsgComponent } from './msg.component';
import { MsgService } from '../msg/msg.service';

describe('MsgComponent', () => {
  let component: MsgComponent;
  let fixture: ComponentFixture<MsgComponent>;

  beforeEach(async(() => {
    let msgServiceStub = {
      getMessage(): Observable<any> {
        return new Subject<any>().asObservable();
      }
    };
    TestBed.configureTestingModule({
      declarations: [ MsgComponent ],
      providers: [ {provide: MsgService, useValue: msgServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
