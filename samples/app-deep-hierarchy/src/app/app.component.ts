import { Component } from '@angular/core';
import {Contact} from './contact-item/contact-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  contacts: Contact[];

  constructor() {
    this.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
    ];
  }

  remove(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    if(index != -1) {
      this.contacts.splice(index, 1);
    }
  }

  add() {
    const contact = {
      id: -1,
      name: this.name,
    };

    this.contacts.push(contact);
  }
}

