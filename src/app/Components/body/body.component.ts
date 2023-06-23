import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { FeatureService } from 'src/app/services/feature.service';
// import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  imageUrl = 'https://cdn.shopify.com/s/files/1/1414/2498/products/ClassicShirt_FrenchBlue1_1080x.jpg?v=1667207840';

  productList = [
    {
      id: 1,
      name: 'Pant',
      color: 'Black',
      price: 35,
      imgUrl: '../../../assets/images/products/pants/1.jpg',
      label: 'T-Shirt',
    },
    {
      id: 2,
      name: 'Hoodie',
      color: 'Black',
      price: 35,
      imgUrl: '../../../assets/images/products/hoodies/1.jpg',
      label: 'T-Shirt',
    },
    {
      id: 3,
      name: 'T-Shirt',
      color: 'Black',
      price: 35,
      imgUrl: '../../../assets/images/products/shirts/1.jpg',
      label: 'T-Shirt',
    },
  ]

  @Input() newUser: User = null!;


  constructor(private feature: FeatureService) {}

  view() {
    this.feature.setValue('products')
  }
  
}
