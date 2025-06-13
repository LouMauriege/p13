import { RxStompService } from './rx-stomp.service';
import { rxStompConfig } from '../rx-stomp.config';

export function RxStompServiceFactory() {
  const rxStomp = new RxStompService();
  rxStomp.configure(rxStompConfig);
  rxStomp.activate();
  return rxStomp;
}