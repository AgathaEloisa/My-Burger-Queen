import { OrderComponent } from './../dialog/order/order.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  order: number;
  client: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order: 1, client: 'Agatha' },
  {order: 2, client: 'Rauuul' },
  {order: 3, client: 'Aurora' },
];

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

    displayedColumns: string[] = ['order', 'client'];
    dataSource = ELEMENT_DATA;

    // tslint:disable-next-line: typedef
    openDialog() {
      this.dialog.open(OrderComponent, {
        data: {
          animal: 'panda'
        }
      });
    }
  ngOnInit(): void {
  }

}
