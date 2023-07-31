import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { GetAllManagersComponent } from './components/get-all-managers/get-all-managers.component';
import { GetNonManagersComponent } from './components/get-non-managers/get-non-managers.component';
import { CollabNonAffectedManagerComponent } from './components/collab-non-affected-manager/collab-non-affected-manager.component';
import { GetManagerWithoutAccComponent } from './components/get-manager-without-acc/get-manager-without-acc.component';
@NgModule({
  declarations: [
    AppComponent,
    GetAllManagersComponent,
    GetNonManagersComponent,
    CollabNonAffectedManagerComponent,
    GetManagerWithoutAccComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
