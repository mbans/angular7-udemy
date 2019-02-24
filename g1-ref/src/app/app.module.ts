import { RoutingModule } from './routing/routing.module';

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { NavMenuComponent } from './common/nav-menu/nav-menu.component';
import { SearchRequestComponent } from './search/search-request/search-request.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstrumentRequestsComponent } from './instrument-requests/instrument-requests.component';
import { InstrumentRequestService } from './instrument-request.service';
import { NotFoundInstrumentsComponent } from './not-found-instruments/not-found-instruments.component';
import { TabpanelComponent } from './tabpanel/tabpanel.component';
import { ExistingInstrumentSearchComponent } from './existing-instrument-search/existing-instrument-search.component';
import { ExistingInstrumentSearchParentComponent } from './existing-instrument-search-parent/existing-instrument-search-parent.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    TrainingComponent,
    NavMenuComponent,
    SearchRequestComponent,
    DashboardComponent,
    InstrumentRequestsComponent,
    NotFoundInstrumentsComponent,
    SearchRequestComponent,
    TabpanelComponent,
    ExistingInstrumentSearchComponent,
    ExistingInstrumentSearchParentComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [InstrumentRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
