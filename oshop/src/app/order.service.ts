import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Order } from './models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order: Order) {
    const result =  await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    console.log('getting orders...');
    return this.db.list('/orders').snapshotChanges()
    .pipe(
        map(items => {
          return items.map(o => {
              const data = o.payload.val();
              const key = o.payload.key;
              return { key, ...data } as Order;           // or {key, ...data} in case data is Obj
              // return { key, ...data } as Order;           // or {key, ...data} in case data is Obj
            });
          }
        )
      );
    }

    get(orderId) {
      return this.db.object('/orders/' + orderId).valueChanges();
    }



  // TODO: add a 'getOrdersByUserId' method
}
