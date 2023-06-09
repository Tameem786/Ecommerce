import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { BehaviorSubject, Observable, pipe, take } from 'rxjs';
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
  price: number = 0;
  shoppingItem: any[] = []; 
  shoppingCart: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  id: string = '';
  orderShowMenu: boolean = true; 
  @Input() newUser: User = null!;

  ngOnInit(): void {
    console.log('NgOnit()')
    this.id = localStorage.getItem('userId') || '';
    this.cart.getCart(this.id).subscribe((response: any) => {
      response.forEach((item: any) => {
        this.cart.getProduct(item.product_id).subscribe((data: any) => {
          const curr_val = this.shoppingCart.value;
          const withQuantity = {...data, quantity: item.quantity}
          this.shoppingCart.next([...curr_val, withQuantity])
        })
      })
    })
    this.shoppingCart.subscribe((value) => {
      this.shoppingItem = value
      let total = 0;
      value.forEach((item) => {
        total += item.product_price*item.quantity
        this.price = total
      })
    })
    // console.log(this.shoppingItem);
  }
  
  constructor(private calc: PriceCalculatorService, private cart: CartService) {
    this.id = localStorage.getItem('userId') || '';
  }

  increase(value: number, index: number) {
    const currItems =  this.shoppingItem.slice()
    currItems[index] = {...this.shoppingItem[index], quantity: value+1}
    this.shoppingCart.next(currItems)
  }

  decrease(value: number, index: number) {
    const currItems =  this.shoppingItem.slice()
    if(value!=0)
      currItems[index] = {...this.shoppingItem[index], quantity: value-1}
    this.shoppingCart.next(currItems)
  }

  removeItem(id: string, index: number) {
    this.cart.removeItem(localStorage.getItem('userId') || '', id).subscribe((value) => {
      console.log(value)
    })
    this.shoppingItem.splice(index, 1)
    this.shoppingCart.next(this.shoppingItem)
  }

  // showOrderButton() {
  //   this.orderShowMenu = !this.orderShowMenu;
  // }

}
