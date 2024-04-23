import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-signal-r',
  templateUrl: './signal-r.component.html',
  styleUrls: ['./signal-r.component.css']
})
export class SignalRComponent implements OnInit , OnDestroy{

  constructor(private signalRServices : SignalrService){ }
  ngOnInit(){
    this.signalRServices.startConnection(); 

    setTimeout(()=>{
    this.signalRServices.askServerListerner();
    this.signalRServices.askServer();
    },2000);
  }

  ngOnDestroy() {
    this.signalRServices.hubConnection.off("askServerListerner");
  }

}
