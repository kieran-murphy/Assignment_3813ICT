import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
//exports the socketservice class for use for chat component
export class SocketService {
  private socket;
  constructor() { }
  //uses server URL for communication
  public initSocket(): void {
    this.socket = io(SERVER_URL);
  }
//outputs messages based on input
  public send(message: string): void {
    this.socket.emit('message', message);
  }
  // creates an observable object that is based on Sockets input and returns it as a string
  public onMessage(): Observable<any> {
    let observable = new Observable(observer=>{
      this.socket.on('message', (data:string) => observer.next(data));
    });
    return observable;
  }
}
