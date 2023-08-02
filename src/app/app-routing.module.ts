import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetAllManagersComponent } from './components/get-all-managers/get-all-managers.component';
import { GetNonManagersComponent } from './components/get-non-managers/get-non-managers.component';
import { CollabNonAffectedManagerComponent } from './components/collab-non-affected-manager/collab-non-affected-manager.component';
import { GetManagerWithoutAccComponent } from './components/get-manager-without-acc/get-manager-without-acc.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  { path: '', redirectTo: 'managers', pathMatch: 'full' },
  { path: 'managers', component: GetAllManagersComponent },
  { path: 'nonManagers', component: GetNonManagersComponent },
  { path: 'nonAffectedCollabs', component: CollabNonAffectedManagerComponent },
  { path: 'ManagerWithoutAcc', component: GetManagerWithoutAccComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
