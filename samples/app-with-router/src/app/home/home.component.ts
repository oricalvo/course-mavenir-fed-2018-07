import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"}
  ];

  constructor(private router: Router) {
    console.log("Home.ctor");
  }

  ngOnDestroy() {
    console.log("Home.dtor");
  }

  gotoDetails(contact) {
    this.router.navigate(["details", contact.id]);
  }
}
