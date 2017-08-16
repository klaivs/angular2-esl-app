import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

declare var $:any;    //now it's possible to use jQuery
import { MsgService } from '../msg/msg.service';
import { APP_CONFIG, IAppConfig } from '../app.config';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnDestroy {
  message: any;
  subscription: Subscription;
  constructor(
    private msgService: MsgService,
  ) {
    this.subscription = this.msgService.getMessage().subscribe(message => {
      this.message = message; 
      this.initMsg(this.msgService.config.msgTimeout, ()=>{this.oncloseMsg();});
    });
  }

  initMsg(_timeout:number, closefunc){
    window.setTimeout(function() {
      $(".alert").fadeTo(500, 0).slideUp(500, function(){
        closefunc();
        $(this).remove(); 
      });
    }, _timeout);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  oncloseMsg(){
    this.msgService.clearMessage();
  }

}
