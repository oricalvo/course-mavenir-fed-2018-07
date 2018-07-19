import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact-item/contact-item.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() contactDelete: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  remove(contact: Contact) {
    this.contactDelete.emit(contact);
  }
}
