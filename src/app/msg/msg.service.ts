import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MsgService {
  private messages = new Subject<any>();

    addMessage(message: string) {
      this.messages.next({ text: message });
    }

    clearMessage() {
      this.messages.next();
    }

    getMessage(): Observable<any> {
      return this.messages.asObservable();
    }

}
