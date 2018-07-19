import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  intervalId;

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    console.log("clock.ngOnInit");

    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    console.log("clock.ngOnDestroy");

    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
