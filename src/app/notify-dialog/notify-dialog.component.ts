import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.css']
})
export class NotifyDialogComponent implements OnInit {
  content: string;
  buttonCap: string;
  hasFlag: boolean;

  constructor(
    public dialogRef: MatDialogRef<NotifyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if ('flag' in this.data) {
      this.hasFlag = true;
      this.content = "Here is your flag!";
      this.buttonCap = "Yay!";
    }
    else {
      this.hasFlag = false;
      this.content = "Try again!";
      this.buttonCap = "Okay :(";
    }
  }

  onClick(): void {
    this.dialogRef.close();
  }
}
