import { Component, OnInit } from '@angular/core';
import {appStore, Subscriber} from '../app.store';

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.component.html',
  styleUrls: ['./subscriber-details.component.css']
})
export class SubscriberDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get sub(): Subscriber {
    return appStore.selected;
  }
}
