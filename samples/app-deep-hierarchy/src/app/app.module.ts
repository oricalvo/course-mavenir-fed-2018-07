import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
