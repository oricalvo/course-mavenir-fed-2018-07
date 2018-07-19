import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showClock: boolean = true;
  clockFormat: string = "HH:mm";

  toggle() {
    this.showClock = !this.showClock;
  }

  changeFormat() {
    this.clockFormat = "ss";
  }

  onClockTick() {
    console.log("tick");
  }
}
