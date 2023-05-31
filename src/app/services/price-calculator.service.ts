import { Injectable } from '@angular/core';
import { Carts } from '../models/carts.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceCalculatorService {

  private totalPrice = new BehaviorSubject<number>(0);
  private price = 0;

  constructor() { }

  calculatePrice(carts: Carts) {
    this.totalPrice.next(0);
    this.price = 0;
    for(let i=0; i<carts.getCart().length; i++) {
      this.price += carts.getCart()[i].getProductPrice();
    }
    this.totalPrice.next(this.price);
  }

  getPrice(): BehaviorSubject<number> {
    return this.totalPrice;
  }
}
