import {appStore, Group} from './app.store';

export class AppService {
  constructor() {
  }


  selectGroup(group: Group) {
    appStore.selectedGroup = group;
  }
}
