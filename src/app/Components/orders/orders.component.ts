import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList: any = []
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 0;
  bufferValue = 75;

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((value: any) => {
      this.orderList = value.filter((order: any) => order.order_by == localStorage.getItem('username'))
    })
  }

  received(id: string) {
    this.orderService.delivered(id).subscribe((value: any) => {
      this.orderList = value.filter((order: any) => order.order_by == localStorage.getItem('username'));
    })
  }
}
