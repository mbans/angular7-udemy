import { Injectable } from '@angular/core';
import { InstrumentRequest } from './model/instrument-request';
import { InstrumentRequestSearchCriteria } from './model/instrument-request-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class InstrumentRequestService {

  constructor() { }

  /**
   * Returns requests that match the identifier
   */
  findRequests(searchCriteria: InstrumentRequestSearchCriteria): InstrumentRequest[] {

    // check that at least property is set
    if (this.isEmpty(searchCriteria)) {
      console.log('Empty search criteria, will not query for Instrument Requests....');
      return [];
    }

    console.log('Searching for Instrument requests ' + JSON.stringify(searchCriteria));
     return requests.filter(req =>  !(searchCriteria.code) ? true : (req.code === searchCriteria.code))
                   .filter(req =>  !(searchCriteria.type) || searchCriteria.type === 'ALL' ? true : (req.type === searchCriteria.type))
                   .filter(req =>  !(searchCriteria.status) ? true : (req.status === searchCriteria.status))
                   .filter(req =>  !(searchCriteria.user) ? true : (req.user === searchCriteria.user));
  }

  findAll() {
    return requests;
  }

  isEmpty(searchCriteria: InstrumentRequestSearchCriteria) {
    return this.empty(searchCriteria.code) &&
    this.empty(searchCriteria.type) &&
    this.empty(searchCriteria.status) &&
    this.empty(searchCriteria.user) &&
    searchCriteria.from === undefined &&
    searchCriteria.to === undefined;
  }

  public empty(value): boolean {
    return value === '' || value === undefined;
  }
}

const requests: InstrumentRequest[] = [
  {id: 1, code: 'S1', type: 'SEDOL', status: 'PUBLISHED', user: 'TA', updated: new Date()},
  {id: 2, code: 'S1', type: 'TICKER', status: 'NOT FOUND', user: 'TA', updated: new Date()},
  {id: 3, code: 'I1', type: 'ISIN', status: 'PUBLISHED', user: 'TA', updated: new Date()},
  {id: 4, code: 'T1', type: 'TICKER', status: 'NOT FOUND', user: 'TA', updated: new Date()}
];

