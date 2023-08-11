import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GetAllManagersComponent} from "./components/get-all-managers/get-all-managers.component";
import {GetNonManagersComponent} from "./components/get-non-managers/get-non-managers.component";
import { CollabNonAffectedManagerComponent } from './components/collab-non-affected-manager/collab-non-affected-manager.component';
import {GetManagerWithoutAccComponent} from "./components/get-manager-without-acc/get-manager-without-acc.component";

import {PourcentagesParEcoleComponent} from "./components/pourcentages-par-ecole/pourcentages-par-ecole.component";
import {RatioComponent} from "./components/ratio/ratio.component";

const routes: Routes = [
  { path: 'managers', component:GetAllManagersComponent },
  { path: '', redirectTo: 'managers', pathMatch: 'full' },
  { path: 'nonManagers', component:GetNonManagersComponent },
  { path: 'nonAffectedCollabs', component: CollabNonAffectedManagerComponent },
  {path:'ManagerWithoutAcc', component :GetManagerWithoutAccComponent},
  {path:'VisualizeRatio',component:RatioComponent},
  {path:'ManagerWithoutAcc', component :GetManagerWithoutAccComponent},
  { path: 'PourcentageEcole', component:PourcentagesParEcoleComponent }
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
