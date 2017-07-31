import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MsgService } from '../msg/msg.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnDestroy {
  message: any;
  subscription: Subscription;
  constructor(
    private msgService: MsgService
  ) {
    this.subscription = this.msgService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  oncloseMsg(){
    this.msgService.clearMessage();
  }

}
