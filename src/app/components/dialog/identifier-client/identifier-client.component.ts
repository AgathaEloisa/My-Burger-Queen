import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-identifier-client',
  templateUrl: './identifier-client.component.html',
  styleUrls: ['./identifier-client.component.css']
})
export class IdentifierClientComponent {

  constructor(
    public dialogRef: MatDialogRef<IdentifierClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
