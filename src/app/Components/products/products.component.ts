import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products = [
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/pants/1.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/pants/2.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/pants/3.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/hoodies/1.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/hoodies/2.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/hoodies/3.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/socks/1.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/socks/2.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/socks/3.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/shirts/1.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/shirts/2.jpg', 'T-Shirt'),
    new Product(1, 'T-Shirt', 'Black', 'XL', 35, '../../../assets/images/products/shirts/3.jpg', 'T-Shirt'),
  ];

}
