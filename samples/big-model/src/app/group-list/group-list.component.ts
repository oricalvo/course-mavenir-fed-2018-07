import { Component, OnInit } from '@angular/core';
import {appStore, Group} from '../app.store';
import {AppService} from '../app.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get groups() {
    return appStore.groups;
  }

  selectGroup(group: Group) {
    new AppService().selectGroup(group);
  }

  isSelected(group: Group) {
    return appStore.selectedGroup == group;
  }
}
