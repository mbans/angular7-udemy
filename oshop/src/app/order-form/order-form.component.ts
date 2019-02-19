import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {

  order = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService) {

    // the route for this component is /product/:id - this portion pulls out the id part for us
    // if it is set then we will go and retrieve the product from firebase and set it to the current 'product'
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // the 'take' operator will take 1 element from the observable and then destroy it
      // we only expect the obs to omit one item
      this.orderService.get(id).pipe(
        take(1)
      )
      .subscribe( o => {
        this.order = o;
        console.log('Retrieved p=' + JSON.stringify(o));
      });
    }

  }
}


