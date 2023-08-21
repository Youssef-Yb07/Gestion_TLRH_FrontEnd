import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PagesModule } from './Pages/pages.module';
import { LayoutComponent } from './Layout/layout/layout.component';
import { SideBarComponent } from './Layout/layout/Components/side-bar/side-bar.component';
import { HeaderComponent } from './Layout/layout/Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
