import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RxStompService } from './services/rx-stomp.service';
import { RxStompServiceFactory } from './services/rx-stomp-service-factory';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: RxStompService,
      useFactory: RxStompServiceFactory
    }
  ]
};
