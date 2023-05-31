import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  imageUrl = 'https://cdn.shopify.com/s/files/1/1414/2498/products/ClassicShirt_FrenchBlue1_1080x.jpg?v=1667207840';

  productList = [
    {
      name: 'Pant',
      color: 'Black',
      price: 35,
      imgUrl: '../../../assets/images/products/pants/1.jpg',
      label: 'T-Shirt',
    },
    {
      name: 'Hoodie',
      color: 'Black',
      price: 35,
      imgUrl: '../../../assets/images/products/hoodies/1.jpg',
      label: 'T-Shirt',
    },
    {
      name: 'T-Shirt',
      color: 'Black',
      price: 35,
      imgUrl: '../../../assets/images/products/shirts/1.jpg',
      label: 'T-Shirt',
    },
  ]
}
