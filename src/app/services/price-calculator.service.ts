import { Injectable } from '@angular/core';
import { Carts } from '../models/carts.model';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {

  private totalPrice = new BehaviorSubject<number>(0);
  private numOfProducts = new BehaviorSubject<number>(0);
  private price = 0;

  constructor() { }

  calculatePrice(carts: Cart[]) {
    this.totalPrice.next(0);
    this.price = 0;
    for(let i=0; i<carts.length; i++) {
      this.price += carts[i].getProductPrice();
    }
    this.totalPrice.next(this.price);
  }

  getPrice(): BehaviorSubject<number> {
    return this.totalPrice;
  }

  getNumberOfProds(): BehaviorSubject<number> {
    return this.numOfProducts;
  }
}
