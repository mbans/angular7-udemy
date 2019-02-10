import { FavouriteService } from './../favourite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isSelected = false;
  likesCount = 0;

  constructor(favouriteService: FavouriteService) { 
  }

  onClick() {
    if(this.isSelected) {
      this.likesCount--; 
    }
    else {
      this.likesCount++; 
    }    
    this.isSelected = !this.isSelected;

    console.log(this.isSelected)
  }

  ngOnInit() {
  }

}
