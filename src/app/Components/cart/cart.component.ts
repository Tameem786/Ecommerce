import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Carts } from 'src/app/models/carts.model';
import { Product } from 'src/app/models/product.model';
import { PriceCalculatorService } from 'src/app/services/price-calculator.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts: Carts;
  totalPrice: number = 0;
  quantity: number = 0;
  cartLength: number = 0;

  ngOnInit(): void {
    // this.carts = new Carts();
    this.carts.addCart(new Cart(1, new Product(1, 'T-Shirt', 'Black', 'XL', 35, 
    'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt')));
    this.carts.addCart(new Cart(2, new Product(2, 'Hoodie', 'Blue', 'L', 75, 
    'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt')));
    this.carts.addCart(new Cart(3, new Product(3, 'Socks', 'Dark Grey', 'XL', 45, 
    'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt')));
    
    this.calc.calculatePrice(this.carts);
    this.calc.getPrice().subscribe((value) => {
      console.log('Price Updated');
      this.totalPrice = value;
    })
  }
  
  constructor(private calc: PriceCalculatorService) {
    this.carts = new Carts();
    // this.calc.calculatePrice();
  }

  // getPrice() {
  //   this.totalPrice = this.carts.getCart()[1].getProductPrice();
  // }

  increase(val: number) {
    this.carts.getCart()[val-1].increase_item();
    this.calc.calculatePrice(this.carts);
    // console.log(this.carts.getCart()[val-1].getNumber())
  }

  decrease(val: number) {
    this.carts.getCart()[val-1].decrease_item();
    this.calc.calculatePrice(this.carts);
  }

  removeItem(id: number) {
    this.carts.getCart().splice(id, 1);
    this.calc.calculatePrice(this.carts);
  }

}
