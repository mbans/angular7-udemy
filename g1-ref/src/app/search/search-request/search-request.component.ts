import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InstrumentRequestSearchCriteria } from 'src/app/model/instrument-request-search-criteria';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.scss']
})

export class InstrumentRequestSearchComponent implements OnInit {

  @Output() instrumentSearchRequest = new EventEmitter<InstrumentRequestSearchCriteria>();
  searchCriteria: InstrumentRequestSearchCriteria = new InstrumentRequestSearchCriteria();

  types = ['ALL', 'CUSIP', 'SEDOL', 'HSBC_ID', 'ISIN', 'RIC', 'TICKER'];

  constructor() { }

  ngOnInit() {
  }

  search(form: NgForm) {
    this.instrumentSearchRequest.emit(this.searchCriteria);
    console.log('emitted an event' + JSON.stringify(this.searchCriteria));
  }
}

export interface Identifier {
  type: string;
  code: string;
}
