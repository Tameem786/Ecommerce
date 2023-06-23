import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
// import { DatabaseService } from 'src/app/services/database.service';
import { FeatureService } from 'src/app/services/feature.service';
import { PriceCalculatorService } from 'src/app/services/price-calculator.service';

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
    private feature: FeatureService,
    // private data: DatabaseService,
    private cart: CartService
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

  onSelect(feature: string) {
    this.feature.setValue(feature);
  }

  logout() {
    this.auth.logout();
    this.feature.setValue('home');
  }
}
