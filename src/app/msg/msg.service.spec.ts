import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

import { MsgService } from './msg.service';

describe('MsgService', () => {
  let test_message:string = "testing message";
  let test_type:number = 3;
  let test_type_txt:string = "warning";
  let test_title:string = "Attention";

  let message: any;
  let subscription: Subscription;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgService]
    });
  });

  it('should be created', inject([MsgService], (service: MsgService) => {
    expect(service).toBeTruthy();
  }));

  it('#getMessage should return an Observable', inject([MsgService], (service: MsgService) => {
    expect(service.getMessage()).toEqual(jasmine.any(Observable));
  }));

  it('#addMessage should work', inject([MsgService], (service: MsgService) => {
    subscription = service.getMessage().subscribe(_message => { message = _message; }); //subscribe to message
    expect(message).not.toBeDefined()
    service.addMessage(test_message, test_type, test_title);
    expect(message.text).toBe(test_message);
    expect(message.type).toBe(test_type_txt);
    expect(message.title).toBe(test_title);
  }));
});
