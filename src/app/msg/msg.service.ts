import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { APP_CONFIG, IAppConfig } from '../app.config';

@Injectable()
export class MsgService {
  private messages = new Subject<any>();
  config: IAppConfig;
    constructor(@Inject(APP_CONFIG) _config: IAppConfig) {
      this.config = _config;
    }   
    addMessage(_message: string, _type: number, _title:string) {
      var typ:string;
      switch(_type){
        case 1:{ typ = "success"; break; }
        case 2:{ typ = "info"; break; }
        case 3:{ typ = "warning"; break; }
        case 4:{ typ = "danger"; break; }
        default: { typ = "info"; break; }
      }
      this.messages.next({ text: _message, type: typ, title: _title });
    }

    clearMessage() {
      this.messages.next();
    }

    getMessage(): Observable<any> {
      return this.messages.asObservable();
    }

}
