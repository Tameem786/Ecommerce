import { Component } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent {
  imageObject: Array<object> = [
    {
      image: 'https://picsum.photos/id/1018/1000/500',
      thumbImage: 'https://picsum.photos/id/1018/1000/500',
      alt: 'alt of image',
      title: 'title of image',
    },
    {
      image: 'https://picsum.photos/id/1015/1000/500',
      thumbImage: 'https://picsum.photos/id/1015/1000/500',
      alt: 'alt of image',
      title: 'title of image',
    },
    {
      image: 'https://picsum.photos/id/1019/1000/500',
      thumbImage: 'https://picsum.photos/id/1019/1000/500',
      alt: 'alt of image',
      title: 'title of image',
    },
  ];
}
