import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const apiURL = 'http://localhost:3000/api/products';
    return this.http.get(apiURL);
  }

}
