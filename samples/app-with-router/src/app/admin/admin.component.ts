import { Component, OnInit } from '@angular/core';

console.log("AdminComponent XXXXXX")

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor() {
    console.log("Admin.ctor");
  }

  ngOnDestroy() {
    console.log("Admin.dtor");
  }
}
