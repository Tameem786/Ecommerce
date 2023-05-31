export class Product {
    id: number;
    product_name: string;
    product_color: string;
    product_size: string;
    product_price: number;
    img_url: string;
    tag: string;

    constructor(
        id: number,
        product_name: string,
        product_color: string,
        product_size: string,
        product_price: number,
        img_url: string,
        tag: string
    ) {
        this.id = id;
        this.product_name = product_name;
        this.product_color = product_color;
        this.product_size = product_size;
        this.product_price = product_price;
        this.img_url = img_url;
        this.tag = tag;
    }

}