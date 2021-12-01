import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-firstdialog',
  templateUrl: './firstdialog.component.html',
  styleUrls: ['./firstdialog.component.css']
})
export class FirstdialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '40%',
      width: '60%'
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog',
  templateUrl: 'firstDialog.html',
})
export class DialogContentExampleDialog {}
