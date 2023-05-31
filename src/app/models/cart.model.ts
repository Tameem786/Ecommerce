import { Product } from "./product.model";

export class Cart {
    cart_id: number;
    num_of_products: number;
    product: Product;

    constructor(
        cart_id: number,
        product: Product,
    ) {
        this.cart_id = cart_id;
        this.num_of_products = 1;
        this.product = product;
    }

    increase_item() {
        this.num_of_products += 1;
    }

    decrease_item() {
        if (this.num_of_products > 0) {
            this.num_of_products -= 1;
        }
    }

    getProduct() {
        return this.product;
    }

    getNumber() {
        return this.num_of_products;
    }

    getProductPrice() {
        return this.product.product_price * this.num_of_products;
    }

    getId() {
        return this.cart_id;
    }
}