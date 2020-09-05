
import { Router } from '@angular/router';

import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  messagecontent:string="";
  messages:string[] = [];
  ioConnection:any;

  userid = sessionStorage.getItem('userid');
  username = sessionStorage.getItem('username');
  role = sessionStorage.getItem('role');
  //birthdate = sessionStorage.getItem('birthdate');
  //age = sessionStorage.getItem('age');
  email = sessionStorage.getItem('email');
  session = null;

  

  
  ngOnInit() {
    this.initIoConnection();
    if (sessionStorage.length == 0){
      this.session = false;
      this.router.navigateByUrl('');
    } else {
      this.session = true;
    }
  } 

  initIoConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
    
      .subscribe((message:string) => {
        //add new message to the messages array.
        this.messages.push(message);
      });
  }

  chat() {

    if(this.messagecontent){
      //check there is a message to send
      this.socketService.send(this.messagecontent);
      this.messagecontent=null;
    }else{
      console.log("no message");
    }

  }
  
  constructor(private socketService:SocketService, private router: Router) {}

  

  logout() {
    console.log('clicked btn');
    this.session = false;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}


