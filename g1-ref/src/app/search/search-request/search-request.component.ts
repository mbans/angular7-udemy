import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.scss']
})

export class SearchRequestComponent implements OnInit {

  @Output() newSearch = new EventEmitter<Identifier>();
  request: Identifier = {code: '', type: ''};

  types = ['ALL', 'CUSIP', 'SEDOL', 'HSBC_ID', 'ISIN', 'RIC', 'TICKER'];

  constructor() { }

  ngOnInit() {
  }

  search(form: NgForm) {
    this.newSearch.emit(this.request);
    console.log('emitted an event' + JSON.stringify(this.request));
  }
}

export interface Identifier {
  type: string;
  code: string;
}
