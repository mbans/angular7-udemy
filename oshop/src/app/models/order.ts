import { ShoppingCart } from './shopping-cart';
import { ShoppingCartItem } from './shopping-cart-item';
import { isNgTemplate } from '@angular/compiler';
export class Order {

    key: string;
    datePlaced: number;
    items: any[];
    totalPrice = 0;
    quantity = 0;

    constructor(public userId, public userName, public shipping: any, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();

        this.items = shoppingCart.itemList.map(i => this.createOrderItem(i));

        this.totalPrice += shoppingCart.itemList
                                .map( item => item.totalPrice)
                                .reduce( (sum, current) => current + sum);

        this.quantity += shoppingCart.itemList
                                .map( item => item.quantity)
                                .reduce( (sum, current) => current + sum);

    }

    private createOrderItem(item: ShoppingCartItem) {
        return {
            product: {
                title: item.title,
                imageUrl: item.imageUrl,
                price: item.price
            },
            quantity: item.quantity,
            totalPrice: item.totalPrice
        };
    }
}
