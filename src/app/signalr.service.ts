import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr'

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  toastr: any;
  
  constructor() { }

  // giving error and next is alternative of it 
  // hubConnection: signalR.HubConnection;
  hubConnection!: signalR.HubConnection;
  // hubConnection: signalR.HubConnection = new signalR.HubConnectionBuilder().build();


  startConnection = () =>{
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:5001/toastr",{
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

    this.hubConnection
    .start()
    .then(()=>{
      console.log('hub connection started!');
      this.askServerListerner();
      this.askServer();()=>{
        console.log("askServer.then")
      }
    })
    .catch(err=> console.log('Error while starting the connnection'+ err));
    
  }


  askServer(){
    console.log('askServerStart');
    this.hubConnection.invoke("askServer", "hey")
    .then(()=>{
      console.log("askServer.then")
    })
    .catch(err=> console.error(err));
  }

  askServerListerner(){
    console.log('askServerListernerStart');

    this.hubConnection.on("askSeverResponse",(sometext)=>{
      console.log("askServer.then");
      this.toastr.sucess(sometext);
    })
  }
}
