import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';

//Import componenets
import { GetAllManagersComponent } from './components/get-all-managers/get-all-managers.component';
import { GetNonManagersComponent } from './components/get-non-managers/get-non-managers.component';
import { CollabNonAffectedManagerComponent } from './components/collab-non-affected-manager/collab-non-affected-manager.component';
import { GetManagerWithoutAccComponent } from './components/get-manager-without-acc/get-manager-without-acc.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    
    //========== Components ==========
    GetAllManagersComponent,
    GetNonManagersComponent,
    CollabNonAffectedManagerComponent,
    GetManagerWithoutAccComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TablerIconsModule]
})
export class AppModule { }
