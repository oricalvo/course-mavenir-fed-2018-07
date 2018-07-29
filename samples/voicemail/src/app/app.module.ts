import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberListComponent,
    SubscriberDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appService: AppService) {
    appService.init();
  }
}
