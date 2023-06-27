import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: any;
  userID: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cart: CartService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((value: any) => {
      // console.log(value.filter((product: any) => product._id === this.route.snapshot.paramMap.get('id')))
      this.product = value.filter((product: any) => product._id === this.route.snapshot.paramMap.get('id'))
      // console.log(this.product[0].product_price)
    })
    this.userID = localStorage.getItem('userId') || '';
    console.log('User ID: ', this.userID)
  }

  addToCart(id: string, body: any) {
    if(this.userID) {
      this.cart.addToCart(id, body).subscribe((response: any) => {
        this.snackBar.open(response.status, '', {
          verticalPosition: 'top',
          duration: 3000,
          panelClass: ['snack-bar']
        })
        console.log(response.status)
      })
      this.cart.setCartNumber(1);
    } else {
      this.router.navigate(['login'])
    }
  }


}
