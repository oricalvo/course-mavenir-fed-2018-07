import { Component, OnInit } from '@angular/core';
import {appStore, Subscriber} from '../app.store';
import {AppService} from '../app.service';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.css']
})
export class SubscriberListComponent {

  constructor(private appService: AppService) {
    console.log("appService", appService);
  }

  get subs() {
    return appStore.subs;
  }

  select(sub: Subscriber) {
    this.appService.select(sub);
  }

  isSubSelected(sub: Subscriber) {
    return appStore.selected == sub;
  }
}
