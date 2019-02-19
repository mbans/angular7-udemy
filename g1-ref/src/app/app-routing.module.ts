import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { SearchRequestComponent } from './search/search-request/search-request.component';
import { SearchResultComponent } from './search/search-result/search-result.component';

const routes: Routes = [ {path: 'search', component : SearchRequestComponent},
                         {path: 'result', component : SearchResultComponent},
                         {path: 'login', component : LoginComponent},
                         {path: '/', redirectTo: 'search'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
