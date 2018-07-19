import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  intervalId;
  @Input() format: string = "HH:mm:ss";
  @Output() tick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    console.log("clock.ngOnInit");
    console.log("format", this.format);

    this.intervalId = setInterval(this.onTick, 1000);
  }

  ngOnDestroy() {
    console.log("clock.ngOnDestroy");

    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  onTick = () => {
    this.time = new Date();

    this.tick.emit();
  }
}
