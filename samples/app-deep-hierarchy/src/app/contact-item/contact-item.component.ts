import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Output() contactDelete: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  remove(contact: Contact) {
    this.contactDelete.emit(contact);
  }
}

export interface Contact {
  id: number;
  name: string;
}
