import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showClock: boolean = true;

  toggle() {
    this.showClock = !this.showClock;
  }
}
