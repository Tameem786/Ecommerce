import { Cart } from "./cart.model";

export class Carts {
    carts: Cart[] = [];

    constructor(){
    }

    // addCart(cart: Cart) {
    //     this.carts[this.carts.length] = cart;
    // }

    setCart(cart: Cart[]): void {
        this.carts = cart;
    }

    getCart() {
        if(this.carts != null) {
            return this.carts;
        } else
            return [];
    }

}