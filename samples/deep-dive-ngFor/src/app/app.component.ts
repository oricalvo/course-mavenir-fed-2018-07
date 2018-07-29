import { Component } from '@angular/core';
import {Contact} from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"}
  ];

  refresh() {
    this.contacts = [
      {"id": 2, "name": "Roni"},
      {"id": 1, "name": "OriXXX"},
      {"id": 3, "name": "Udi"},
      {id:4, name: "Beni"},
    ];
  }

  trackByFn(index, contact) {
    return index;
  }

  add() {
    this.contacts.push({id:-1, name: "XXX"});
  }
}
