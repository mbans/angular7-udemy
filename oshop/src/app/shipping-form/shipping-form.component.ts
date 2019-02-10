import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  shipping = {};
  userSub: Subscription;
  userId: string;
  @Input('cart') cart: ShoppingCart;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router) { }

  async ngOnInit() {
      this.userSub = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  async placeOrder() {
    console.log('placing order');
    const result = await this.orderService.placeOrder(this.createOrder());
    this.router.navigate(['/order-success', result.key]);
  }

  /**
   * Generates the order from the items in the cart
   */
  private createOrder() {
    const o = new Order(this.userId, this.shipping, this.cart);
  }
}
