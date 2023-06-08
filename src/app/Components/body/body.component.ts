import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { DatabaseService } from 'src/app/services/database.service';

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


  constructor(private data: DatabaseService) {}

  addToCart(id: number) {
    if(this.newUser) {
      // console.log('User is here, you add: ', this.productList.find(value=> value.id==id))
      const product = this.productList.find(value=> value.id==id);
      this.data.addData(this.newUser.getID(), new Cart(2, new Product(
        product?.id || 0,
        product?.name || '',
        product?.color || '',
        'XL' || '',
        product?.price || 0,
        product?.imgUrl || '',
        product?.label || '',
      )))
    } else {
      console.log('No user logged in, can not add it')
    }
  }
}
