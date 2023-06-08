import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Carts } from 'src/app/models/carts.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { DatabaseService } from 'src/app/services/database.service';
import { PriceCalculatorService } from 'src/app/services/price-calculator.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // carts: Carts;
  totalPrice: number = 0;
  shoppingItem: any[] = [];
  id: string = '';
  @Input() newUser: User = null!;

  ngOnInit(): void {
    console.log('NgOnit()')
    this.id = localStorage.getItem('userId') || '';
    this.cart.getCart(this.id).subscribe((response: any) => {
      response.forEach((item: any) => {
        this.cart.getProduct(item.product_id).subscribe((data: any) => {
          const withQuantity = {...data, quantity: item.quantity}
          this.shoppingItem.push(withQuantity)
        })
        // console.log(this.shoppingItem)
        // console.log(item.product_id);
      })
    })
    console.log(this.shoppingItem);
  }
  
  constructor(private calc: PriceCalculatorService, private cart: CartService) {
    this.id = localStorage.getItem('userId') || '';
  }

  increase(prod: String, curr_val: number, inc: number) {
    const body = {"quantity": curr_val+inc}
    this.cart.updateItemQuantity(localStorage.getItem('userId') || '', prod, body).subscribe((respose) => {
      console.log(respose)
      console.log('Item Increased')
    })
    
    // this.shoppingItem[val-1].increase_item();
    // this.calc.calculatePrice(this.shoppingItem);
  }

  removeItem(id: number) {
    this.shoppingItem.splice(id, 1);
    this.calc.calculatePrice(this.shoppingItem);
  }

}
