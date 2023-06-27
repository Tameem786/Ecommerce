import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  addToCart(id: String, body: any) {
    const apiURL = 'http://localhost:3000/api/user/cart/';
    return this.http.put(apiURL+id, body);
  }

  removeItem(id: String, prod: String) {
    const apiUrl = 'http://localhost:3000/api/user/'+ id + '/cart/' + prod;
    return this.http.delete(apiUrl);
  }

  removeAll(id: String) {
    const apiURL = 'http://localhost:3000/api/user/' + id + '/cart/';
    return this.http.delete(apiURL);
  }

  getCart(id: String) {
    const apiURL = 'http://localhost:3000/api/user/cart/';
    return this.http.get(apiURL+id);
  }

  getProduct(id: String) { 
    const apiURL = 'http://localhost:3000/api/product/';
    return this.http.get(apiURL+id);
  }

  getCartNumber(): BehaviorSubject<number> {
    return this.itemCount;
  }

  setCartNumber(val: number) {
    if (this.itemCount.getValue() + val >= 0)
      this.itemCount.next(this.itemCount.getValue() + val);
  }

}
