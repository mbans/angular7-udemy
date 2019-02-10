import { ArchiveComponent } from './../archive/archive.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  archives = new Array();

  constructor() { }

  ngOnInit() {
    this.archives.push(
      {title:"1st", year:"2017", month:"1"},
      {title:"2nd", year:"2017", month:"2"},
      {title:"3rd", year:"2017", month:"3"}
    );
  }

}
