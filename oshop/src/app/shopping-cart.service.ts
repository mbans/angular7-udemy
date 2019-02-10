import { ShoppingCart } from './models/shopping-cart';
import { take, map } from 'rxjs/operators';
import { Product } from './models/product';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from './models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    console.log('cartId=' + cartId);
    return (this.db.object('/shopping-carts/' + cartId).valueChanges() as Observable<ShoppingCart>)
      .pipe(

        // Firebase returns what is in the database, however this does not contain the 'totalItemsCount' item
        // Here we map to the ShoppingCart which includes this new property
        map(firebaseShoppingCart => {
          // console.log('creating ShoppingCart with = ' + JSON.stringify(firebaseShoppingCart));
          // const m = firebaseShoppingCart.items as unknown as {[productId: string]: ShoppingCartItem };
          return new ShoppingCart(firebaseShoppingCart.items);
        }
        ));
  }

  async removeFromCart(product: Product) {
    return await this.amendCartQuantity(product, -1);
  }

  async addToCart(product: Product) {
    return await this.amendCartQuantity(product, 1);
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }

    // have no cartId - using the async and await as create returns a promise
    // alternative is to use the 'this.create().then(function()....) format
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private async amendCartQuantity(product: Product, value: number) {
    const cartId = await this.getOrCreateCartId();
    const obj: AngularFireObject<{
      title: string,
      imageUrl: string,
      price: number,
      quantity: number
    }> =
      this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);

    obj.valueChanges().pipe(
      take(1)
    )
      .subscribe(item => {
        const existingQuantity = (item) ? item.quantity : 0;

        // don't want a negative quantity
        if (existingQuantity === 0 && value < 0) {
          return;
        }

        obj.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: existingQuantity + value
        });
      });
  }



}
