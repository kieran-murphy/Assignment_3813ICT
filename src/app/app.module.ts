import { AccountComponent } from './account/account.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SocketService } from './services/socket.service';



import { ChatComponent } from './chat/chat.component';
import { BlockComponent } from './block/block.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ChatComponent,
    ProfileComponent,
    BlockComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

