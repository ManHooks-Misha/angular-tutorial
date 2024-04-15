import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [MessageListComponent, MessageBoxComponent, ChatComponent],
  imports: [
    CommonModule
  ],
  exports:[MessageListComponent]
})
export class ChatModule { }
