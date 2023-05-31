import { Cart } from "./cart.model";

export class Carts {
    carts: Cart[] = [];

    constructor(){}

    addCart(cart: Cart) {
        this.carts[this.carts.length] = cart;
    }

    getCart() {
        return this.carts;
    }

}