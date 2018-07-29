import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact: Contact;

  constructor() {
    console.log("Contact.ctor");
  }

  ngOnDestroy() {
    console.log("Contact.dtor");
  }

}

export interface Contact {
    id: number;
    name: string;
}
