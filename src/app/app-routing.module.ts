import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GetAllManagersComponent} from "./components/get-all-managers/get-all-managers.component";

const routes: Routes = [
  { path: 'managers', component:GetAllManagersComponent },
];
@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
