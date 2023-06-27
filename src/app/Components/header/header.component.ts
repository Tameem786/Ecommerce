import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // @Output() featureSelcted = new EventEmitter<string>();
  loggedIn: boolean = false;
  numOfProds: number = 0;
  @Input() newUser: User = null!;

  constructor(
    private auth: AuthenticationService, 
    private cart: CartService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.cart.getCartNumber().subscribe((value) => {
      console.log('Header: ', value)
      this.numOfProds = value;
    })
    this.auth.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value;
      console.log('Logged In Status Change! ', this.loggedIn);
    })
    // this.data.getCart().subscribe((value) => this.numOfProds=value.length)
    // this.itemNum.getNumberOfProds().next(this.carts.getCart().length);
  
  }



  logout() {
    this.auth.logout();
    this.router.navigate([''])
  }
}
