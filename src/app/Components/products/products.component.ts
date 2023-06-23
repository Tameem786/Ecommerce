import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
// import { DatabaseService } from 'src/app/services/database.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  @Input() newUser: User = null!;
  userID: string = '';
  filter: string = 'all';

  constructor(private product: ProductService, private cart: CartService) {}

  ngOnInit(): void {
    this.product.getProducts().subscribe((response: any) => {
      this.products = response;
      console.log(this.products);
    })
    this.userID = localStorage.getItem('userId') || '';
  }

  addToCart(id: string, body: any) {
    console.log(id);
    this.cart.addToCart(id, body).subscribe((response: any) => {
      console.log(response);
    })
    this.cart.setCartNumber();
    // console.log('Cart added: ', id)
  }

  filterBy(value: string) {
    this.products = this.products.filter(product => product.tag === value);
  }

}
