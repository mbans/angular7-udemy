import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.scss']
})
export class SearchRequestComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  searchForIdentifier(form: NgForm) {
    console.log(form);
  }

}
