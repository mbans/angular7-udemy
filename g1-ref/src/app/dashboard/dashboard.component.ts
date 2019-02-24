import { Component, OnInit } from '@angular/core';
import { InstrumentRequestSearchCriteria } from '../model/instrument-request-search-criteria';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchCriteria: InstrumentRequestSearchCriteria;
  notFoundCriteria: InstrumentRequestSearchCriteria;
  constructor() { }

  ngOnInit() {
    // this.notFoundCriteria = new InstrumentRequestSearchCriteria();
    this.notFoundCriteria = {code: '', type: '', status: 'NOT FOUND', user: '', from: undefined, to: undefined};
  }

  // search(identifier: Identifier) {
    searchInstrumentRequests(seachCriteria: InstrumentRequestSearchCriteria) {
      console.log('Dashboard - set new searchCriterial=' + JSON.stringify(seachCriteria));
      this.searchCriteria = {...seachCriteria} as InstrumentRequestSearchCriteria;
    }
}
