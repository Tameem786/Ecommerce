import { Component, OnChanges, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, pipe, take } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Carts } from 'src/app/models/carts.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

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
  
  constructor(
    private cart: CartService, 
    private order: OrdersService,
    private router: Router
  ) {
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
    this.cart.setCartNumber(-1);
  }

  checkout(val: any) {
    let orderItem: any = []
    val.forEach((element: any) => {
      orderItem = [
        ...orderItem, 
        {
          "product_id": element._id,
          "quantity": element.quantity
        }
      ]
    });
    
    const body = {
      "order_by": localStorage.getItem('username'),
      "order_status": 0,
      "order_amount": this.price,
      "order_item": orderItem
    }
    
    this.order.addToOrderList(body).subscribe((value: any) => {
      console.log(value)
    })
    
    this.cart.removeAll(localStorage.getItem('userId') || '').subscribe((value) => {
      console.log(value);
    })
    this.shoppingCart.next([]);
    this.cart.setCartNumber(0)
    window.location.href = 'https://buy.stripe.com/test_eVa6q2aHI5iP6Fq9AA';
  }

}
