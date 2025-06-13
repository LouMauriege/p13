import { Component, OnInit, OnDestroy } from '@angular/core';
import { RxStompService } from '../services/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})

export class ChatComponent implements OnInit, OnDestroy {
  receivedMessages: string[] = [];
  private topicSubscription!: Subscription;

  message = new FormGroup({
    from: new FormControl(''),
    text: new FormControl('')
  });

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
      from: this.message.get("from")?.value,
      text: this.message.get("text")?.value
    }
    this.rxStompService.publish({ destination: '/app/chat', body: JSON.stringify(message) });
    this.message.get("text")?.reset();
    console.log(this.message);
  }
}
