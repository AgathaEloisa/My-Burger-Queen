import { Component } from '@angular/core';
/* Dialog */
import { MatDialog } from '@angular/material/dialog';
import { IdentifierClientComponent } from '../dialog/identifier-client/identifier-client.component';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
/* Dialog */
  animal: string;
  name: string;

  /* Table */
  displayedColumns: string[] = ['item', 'cost'];
/*   transactions: Transaction[]  */
  transactions = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  // tslint:disable-next-line: typedef
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }


  /* Dialog */
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open( IdentifierClientComponent, {
      width: '30em',
      height: '15em',
      panelClass: 'dialog-identifier-client',
      data: {name: this.name, animal: this.animal}
    });
  }

  /* send to db */

/* let client = firebase.firestore();

client.collection('client').add({
    Name:'',
    order: {}
  })
   catch(function(err) {
      console.log(err)
   }) */
}
