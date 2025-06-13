import { Injectable } from '@angular/core';
import Stomp from '@stomp/stompjs';
import SockJS from '@sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient: Stomp.Client;

  constructor() {}

  connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, (frame) => {
      console.log("Connected: ", frame);

      this.stompClient.subscribe('/topic/public', (message) => {
        console.log(JSON.parse(message.body));
      });
  }
}
