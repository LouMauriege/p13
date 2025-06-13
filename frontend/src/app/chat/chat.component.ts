import { Component, OnInit, OnDestroy } from '@angular/core';
import { RxStompService } from '../services/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})

export class ChatComponent implements OnInit, OnDestroy {
  receivedMessages: string[] = [];
  private topicSubscription!: Subscription;

  constructor(private rxStompService: RxStompService) {}

  ngOnInit(): void {
    this.topicSubscription = this.rxStompService
      .watch('/topic/messages')
      .subscribe((message: Message) => {
        const parsed = JSON.parse(message.body);
        this.receivedMessages.push(`${parsed.from}: ${parsed.text}`);
        console.log(this.receivedMessages);
    });
  }

  ngOnDestroy(): void {
    this.topicSubscription.unsubscribe();
  }

  onSendMessage() {
    const message = {
      from: "User1",
      text: `Message generated at ${new Date()}`
    }
    this.rxStompService.publish({ destination: '/app/chat', body: JSON.stringify(message) });
    console.log(this.receivedMessages);
  }
}
