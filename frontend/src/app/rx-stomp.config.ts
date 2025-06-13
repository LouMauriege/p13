import { RxStompConfig } from '@stomp/rx-stomp';

export const rxStompConfig: RxStompConfig = {
  brokerURL: "ws://localhost:4200/chat/websocket",


  connectHeaders: {
    login: 'guest',
    passcode: 'guest'
  },

  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,

  reconnectDelay: 200,

  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
}