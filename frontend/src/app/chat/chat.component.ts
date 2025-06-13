import { Component } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  private client: Client = new Client({
    brokerURL: 'ws//locahost:8000/ws',
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });
}
