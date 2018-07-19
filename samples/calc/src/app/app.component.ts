import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: string;
  num2: string;
  result;

  calc() {
    this.result = +this.num1 + +this.num2;
  }

  reset() {
    this.num1 = "";
    this.num2 = "";
    this.result = "";
  }
}
