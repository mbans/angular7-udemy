import { InstrumentRequestService } from 'src/app/instrument-request.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { InstrumentRequest } from '../model/instrument-request';
import { InstrumentRequestSearchCriteria } from '../model/instrument-request-search-criteria';

/**
 * The view behind the Instrument Requests result
 * 
 * Takes a searchCriteria as input and makes call down to the underlying service to retrieve
 */
@Component({
  selector: 'app-instrument-requests',
  templateUrl: './instrument-requests.component.html',
  styleUrls: ['./instrument-requests.component.scss']
})
export class InstrumentRequestsComponent implements OnInit, OnChanges {

  // The columns to display in the table
  @Input() public searchCriteria = new InstrumentRequestSearchCriteria();

  displayedColumns: string[] = ['id', 'code', 'type', 'status', 'user', 'updated'];
  dataSource = new MatTableDataSource();
  instrumentRequests: InstrumentRequest[] = [];

  constructor(public instrumentRequestService: InstrumentRequestService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const searchCriteria = changes.searchCriteria;
    this.searchCriteria = {...searchCriteria.currentValue} as InstrumentRequestSearchCriteria;

    console.log('InstrumentRequest - change detected, new criteria = ' + JSON.stringify(this.searchCriteria));

    if (!searchCriteria) {
      console.log('Search criteria is undefined, not searching');
      this.dataSource.data = [];
      return;
    }
    this.instrumentRequests = this.instrumentRequestService.findRequests(this.searchCriteria);
    console.log('Retrieved ' + this.instrumentRequests.length + ' requests from ' + JSON.stringify(this.searchCriteria));
    this.dataSource.data = this.instrumentRequests;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();         // Remove whitespace
    filterValue = filterValue.toLowerCase();  // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
