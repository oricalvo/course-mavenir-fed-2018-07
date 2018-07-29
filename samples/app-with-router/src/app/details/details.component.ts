import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log("Details.ctor");

    // console.log("id", id);
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(map(params => params.id))
      .subscribe(id => {
      console.log("id CHANGED", id);

      this.id = +id;
    });

    // this.id = +this.activatedRoute.snapshot.params.id;
  }

  gotoNextContact() {
    this.router.navigate(["details", this.id + 1]);
  }
}
