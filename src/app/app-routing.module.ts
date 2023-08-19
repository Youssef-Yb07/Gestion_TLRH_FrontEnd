import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GetAllManagersComponent} from "./components/get-all-managers/get-all-managers.component";
import {GetNonManagersComponent} from "./components/get-non-managers/get-non-managers.component";
import {CollabNonAffectedManagerComponent } from './components/collab-non-affected-manager/collab-non-affected-manager.component';
import {GetManagerWithoutAccComponent} from "./components/get-manager-without-acc/get-manager-without-acc.component";
import {PourcentagesParEcoleComponent} from "./components/pourcentages-par-ecole/pourcentages-par-ecole.component";
import {RatioComponent} from "./components/Male-Female-ratio/ratio.component";
import { RecruitmentChartComponent } from './components/recruitment-chart/recruitment-chart.component';
import { GetAllCollaborateursComponent } from './components/get-all-collaborateurs/get-all-collaborateurs.component';
import { DiplomeRatioComponent } from './components/diplome-ratio/diplome-ratio.component';
import { SalaryEvolutionOfCollabComponent } from './components/salary-evolution-of-collab/salary-evolution-of-collab.component';
import {TauxTurnOverComponent} from "./components/taux-turn-over/taux-turn-over.component";
// import {TechnologiesComponent} from "./components/technologies/technologies.component";
import { SalaryEvoltionGraphComponent } from './components/salary-evoltion-graph/salary-evoltion-graph.component';
import {TechnologiesComponent} from "./components/technologies/technologies.component";


const routes: Routes = [
  { path: 'managers', component:GetAllManagersComponent },
  { path: '', redirectTo: 'managers', pathMatch: 'full' },
  { path: 'nonManagers', component:GetNonManagersComponent },
  { path: 'nonAffectedCollabs', component: CollabNonAffectedManagerComponent },
  {path:'MaleFemaleRatio',component:RatioComponent},
  {path:'ManagerWithoutAcc', component :GetManagerWithoutAccComponent},
  { path:'VisualizeRatio',component:RatioComponent},
  { path:'ManagerWithoutAcc', component :GetManagerWithoutAccComponent},
  { path: 'PourcentageEcole', component:PourcentagesParEcoleComponent },
  { path: 'recruitment', component:RecruitmentChartComponent },
  { path: 'collaborateurs', component:GetAllCollaborateursComponent},
  { path: 'diplomeRatio', component: DiplomeRatioComponent},
  {path:'salaryEvolution/:id' ,component:SalaryEvolutionOfCollabComponent},
  { path :'TurnOver' ,component: TauxTurnOverComponent},
  {path :'Technologies',component:TechnologiesComponent},
  { path :'salaryEvolution' ,component: SalaryEvoltionGraphComponent},

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
