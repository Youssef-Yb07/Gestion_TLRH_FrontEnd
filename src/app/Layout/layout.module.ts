import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './layout/Components/side-bar/side-bar.component';
import { HeaderComponent } from './layout/Components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
  ],
  exports: [],
})
export class LayoutModule {}
