import { ShoppingCart } from './shopping-cart';
import { ShoppingCartItem } from './shopping-cart-item';
export class Order {
    datePlaced: number;
    items: any[];

    constructor(public userId, public shipping: any, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.itemList.map(i => this.createOrderItem(i));
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
