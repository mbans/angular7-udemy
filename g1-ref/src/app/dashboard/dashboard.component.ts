import { Component, OnInit } from '@angular/core';
import { Identifier } from '../search/search-request/search-request.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentSearchIdentifier: Identifier;

  constructor() { }

  ngOnInit() {
  }

  // search(identifier: Identifier) {
    setSearchIdentifier(identifier: Identifier) {
      this.currentSearchIdentifier = identifier;
      // console.log('Current search identifier...' + JSON.stringify(this.currentSearchIdentifier));
    }
}
