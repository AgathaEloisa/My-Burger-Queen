import { Component, OnInit } from '@angular/core';

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

  constructor() { }

    displayedColumns: string[] = ['order', 'client'];
    dataSource = ELEMENT_DATA;


  ngOnInit(): void {
  }

}
