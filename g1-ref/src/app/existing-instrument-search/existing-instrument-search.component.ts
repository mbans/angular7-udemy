import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InstrumentRequestSearchCriteria } from '../model/instrument-request-search-criteria';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-existing-instrument-search',
  templateUrl: './existing-instrument-search.component.html',
  styleUrls: ['./existing-instrument-search.component.scss']
})
export class ExistingInstrumentSearchComponent implements OnInit {

  @Output() instrumentSearchRequest = new EventEmitter<InstrumentRequestSearchCriteria>();
  searchCriteria: InstrumentRequestSearchCriteria = new InstrumentRequestSearchCriteria();

  types = ['ALL', 'CUSIP', 'SEDOL', 'HSBC_ID', 'ISIN', 'RIC', 'TICKER'];
  statuses = ['ALL', 'NOT FOUND', 'PUBLISHED', 'REQUESTED'];

  constructor() { }

  ngOnInit() {
  }

  search(form: NgForm) {
    this.instrumentSearchRequest.emit(this.searchCriteria);
    console.log('emitted an event' + JSON.stringify(this.searchCriteria));
  }

}
