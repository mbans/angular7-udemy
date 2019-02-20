import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Identifier } from '../search-request/search-request.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnChanges {

  @Input() public searchIdentifier: Identifier;
  currentSearchIdentifier: Identifier;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const identiferChange = changes.searchIdentifier;
    console.log('prev identifier =' + JSON.stringify(identiferChange.previousValue));
    console.log('Searching db for.....' + JSON.stringify(identiferChange.currentValue));
    this.searchIdentifier = identiferChange.currentValue;
    this.currentSearchIdentifier = {...identiferChange.currentValue};
  }

}
