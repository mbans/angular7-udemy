import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from '../search/search-result/search-result.component';
import { SearchRequestComponent } from '../search/search-request/search-request.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [ {path: 'search', component : SearchRequestComponent},
                         {path: 'result', component : SearchResultComponent},
                         {path: 'login', component : LoginComponent},
                         {path: '', redirectTo: 'search', pathMatch: 'full'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
