import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [ {path: 'dashboard', component : DashboardComponent},
                         {path: 'login', component : LoginComponent},
                         {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
