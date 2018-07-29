import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from '@angular/router';

console.log("AdminModule XXXXXX")

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [
    AdminComponent,
  ]
})
export class AdminModule { }
