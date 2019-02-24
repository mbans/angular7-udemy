import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TabpanelComponent } from '../tabpanel/tabpanel.component';

const routes: Routes = [ {path: 'dashboard', component : DashboardComponent},
                         {path: 'login', component : LoginComponent},
                         {path: 'instruments', component : TabpanelComponent},
                         {path: '', redirectTo: 'instruments', pathMatch: 'full'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
