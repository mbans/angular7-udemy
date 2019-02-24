import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentRequestSearchComponent } from './search/search-request/search-request.component';

const routes: Routes = [ {path: 'search', component : InstrumentRequestSearchComponent},
                         {path: 'login', component : LoginComponent},
                         {path: '/', redirectTo: 'search'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
