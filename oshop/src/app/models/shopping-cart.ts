import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {

    itemList: ShoppingCartItem[] = [];

    constructor(public items: { [productId: string]: ShoppingCartItem }) {
        this.items = items || {};

        for (const productId in items) {
            // This is the shoppingCartItem returned from firebase
            const item = this.items[productId];
            // Object.assign(x, item); // copy all props from item to x
            this.itemList.push(new ShoppingCartItem({...item, key: productId}));
        }
    }

    get totalItemsCount() {
        let count = 0;

        for (const productId in this.items) {
          count += this.items[productId].quantity;
        }
        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (const productId in this.itemList) {
            sum += this.itemList[productId].totalPrice;
        }
        return sum;
    }

    getQuantity(product: Product) {
        const item = this.items[product.key];
        return item ? item.quantity : 0;
    }
}
