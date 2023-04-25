import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentIndex = 0;
  products: any = [
    {'url': 'https://picsum.photos/id/1015/600/400', 'tag': 'T-Shirt'},
    {'url': 'https://picsum.photos/id/1016/600/400', 'tag': 'Shoe'},
    {'url': 'https://picsum.photos/id/1019/600/400', 'tag': 'Sneakers'},
    {'url': 'https://picsum.photos/id/1018/600/400', 'tag': 'Sweat Shirt'},
    {'url': 'https://picsum.photos/id/1018/600/400', 'tag': 'Sweat Shirt'},
  ]

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
    }, 5000);
  }
}
