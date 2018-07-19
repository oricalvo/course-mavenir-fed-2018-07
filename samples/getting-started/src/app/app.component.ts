import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts;
  name;

  constructor() {
    this.contacts = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"},
    ];
  }

  add() {
    console.log("add", this.name);

    if(!this.name) {
      return;
    }

    const contact = {
      id: -1,
      name: this.name,
    };

    this.contacts.push(contact);
  }

  reset() {
    this.name = "";
  }
}
