import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiURL = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  addToOrderList(value: any) {
    return this.http.post(this.apiURL+'api/order', value)
  }

  getOrders() {
    return this.http.get(this.apiURL+'api/orders')
  }
}
