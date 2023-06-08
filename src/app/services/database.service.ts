import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private cartData: {user_id: number, cart_items: Cart[]}[] = [
    {
      user_id: 1, 
      cart_items: [
      new Cart(1, new Product(1, 'T-Shirt', 'Black', 'XL', 35,
        'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt')),
      new Cart(2, new Product(2, 'T-Shirt', 'Black', 'XL', 45, 
        'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt')),
      new Cart(3, new Product(3, 'T-Shirt', 'Black', 'XXL', 15, 
        'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt')),
      new Cart(4, new Product(4, 'T-Shirt', 'Black', 'L', 35, 
        'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt'))
      ]
    },
    {
      user_id: 2,
      cart_items: [
        new Cart(1, new Product(13, 'T-Shirt', 'Yellow', 'L', 55,
        'https://www.decathlon.com.bd/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/5/8549765.jpg', 'Shirt')),
      ]
    }
  ];

  private cartItem = new BehaviorSubject<Cart[]>([]);
  private productList = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { 
  }

  setCart(id: number) {
    const userData =  this.cartData.find(obj => obj.user_id === id);
    if(userData) {
      this.cartItem.next(userData.cart_items);
      // return userData.cart_items;
    } else {
      this.cartItem.next([]);
    }
  }

  addData(id: number, data: Cart) {
    this.cartData.find(obj=> obj.user_id === id)?.cart_items.push(data);
  }

  getCart(): BehaviorSubject<Cart[]> {
    return this.cartItem;
  }

  // setProducts() {
  //   this.productList.next(this.products);
  // }

  getProducts(): BehaviorSubject<Product[]> {
    return this.productList;
  }

  getUsersApi(): Observable<any[]> {
    const apiURL = 'http://localhost:3000/api/users';

    return this.http.get<any[]>(apiURL);
  }
}
