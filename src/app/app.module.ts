import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { GetAllManagersComponent } from './components/get-all-managers/get-all-managers.component';
import { GetNonManagersComponent } from './components/get-non-managers/get-non-managers.component';
import { CollabNonAffectedManagerComponent } from './components/collab-non-affected-manager/collab-non-affected-manager.component';
import { GetManagerWithoutAccComponent } from './components/get-manager-without-acc/get-manager-without-acc.component';
import { PourcentagesParEcoleComponent } from './components/pourcentages-par-ecole/pourcentages-par-ecole.component';
import {RatioComponent} from "./components/Male-Female-ratio/ratio.component";
import { RecruitmentChartComponent } from './components/recruitment-chart/recruitment-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import  {GetAllCollaborateursComponent} from './components/get-all-collaborateurs/get-all-collaborateurs.component';
import { CommonModule } from '@angular/common';
import { SalaryEvolutionOfCollabComponent } from './components/salary-evolution-of-collab/salary-evolution-of-collab.component';
import { FormsModule } from '@angular/forms';
import { salaryPieComponent } from './components/salary-pie/salary-pie.component';
import { TauxTurnOverComponent } from './components/taux-turn-over/taux-turn-over.component';
import {TechnologiesComponent} from "./components/technologies/technologies.component";
import { MaterialModule } from './material.module';
import { LayoutModule } from './Layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    GetAllManagersComponent,
    GetNonManagersComponent,
    CollabNonAffectedManagerComponent,
    GetManagerWithoutAccComponent,
    PourcentagesParEcoleComponent,
    RatioComponent,
    RecruitmentChartComponent,
    GetAllCollaborateursComponent,
    SalaryEvolutionOfCollabComponent,
    salaryPieComponent,
    TauxTurnOverComponent,
    TechnologiesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    LayoutModule,
    MaterialModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
