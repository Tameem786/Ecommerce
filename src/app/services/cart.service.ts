import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(id: String, body: any) {
    const apiURL = 'http://localhost:3000/api/user/cart/';
    return this.http.put(apiURL+id, body);
  }

  updateItemQuantity(id: String, prod: String, body: any) {
    const apiUrl = 'http://localhost:3000/api/user/'+ id + '/cart/' + prod;
    return this.http.put(apiUrl, body);
  }

  getCart(id: String) {
    const apiURL = 'http://localhost:3000/api/user/cart/';
    return this.http.get(apiURL+id);
  }

  getProduct(id: String) { 
    const apiURL = 'http://localhost:3000/api/product/';
    return this.http.get(apiURL+id);
  }
}
