import { Injectable } from '@angular/core';
import {appStore, Subscriber} from './app.store';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) { }

  init() {
    const obs = this.httpClient.get<Subscriber[]>("/api/sub");
    obs.subscribe(subs => {
      appStore.subs = subs;
    });
  }

  select(sub: Subscriber) {
    console.log("select", sub);

    appStore.selected = sub;
  }
}
