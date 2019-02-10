import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  date: Archive;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
  }

  viewAll() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.activatedRoute.paramMap
        .subscribe(params => {
          // the '+' converts to an integer
          let year = +params.get('year');
          let month = +params.get('month');
          this.date = new Archive(year,month);
        });

        
  }
}

export class Archive {
  constructor(private year:number, private month: number) {
  }
}