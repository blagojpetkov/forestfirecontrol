import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


export interface City {
  name: string;
  volunteers: number;
  young_volunteers: number;
  firetrucks: number;
  watertenders: number;
  tractors: number;
  tools: string;
  }
  
  const CityData: City[] = [
  { name: "Скопје", volunteers: 25, young_volunteers: 10, firetrucks: 2, watertenders: 1, tractors: 3, tools: "3 х Моторни пили, 4 пара ракавици"},
  { name: "Македонски Брод", volunteers: 7, young_volunteers: 2, firetrucks: 3, watertenders: 2, tractors: 4, tools: "3 х Моторни пили, 4 пара ракавици"},
  { name: "Свети Николе", volunteers: 12, young_volunteers: 5, firetrucks: 1, watertenders: 1, tractors: 1, tools: "3 х Моторни пили, 4 пара ракавици"},
  { name: "Виница", volunteers: 7, young_volunteers: 2, firetrucks: 0, watertenders: 1, tractors: 0, tools: "3 х Моторни пили, 4 пара ракавици"},
  { name: "Неготино", volunteers: 12, young_volunteers: 10, firetrucks: 2, watertenders: 1, tractors: 0, tools: "3 х Моторни пили, 4 пара ракавици"},
  { name: "Битола",  volunteers: 15, young_volunteers: 10, firetrucks: 1, watertenders: 2, tractors: 2, tools: "3 х Моторни пили, 4 пара ракавици"}
  ]


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public clickedOn(town: string):void {
    let city = CityData.find(x=>x.name === town);
    if(city!==undefined){
      const dialogRef = this.dialog.open(DialogContentExampleDialog, {
        height: '700px',
        width: '900px',
        data:{city:city, onFire:true}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    else{
        const dialogRef = this.dialog.open(DialogContentExampleDialog, {
          height: '150px',
          width: '900px',
          data:{name:town, onFire:false}
        });
  
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
    }
    
  }

}

@Component({
  selector: 'real-dialog',
  templateUrl: 'dialog.html',
})
export class DialogContentExampleDialog {
  public city:City | undefined;
  public name:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {city: City, name:string, onFire: boolean}, public snackBar: MatSnackBar) { 
    if(data.onFire){
    this.city = data.city;
    this.name = data.name;
    }
    else{
        this.city = undefined;
        this.name = data.name;
    }
  
  }
  public apply(): void{
    let snackBarRef = this.snackBar.open("Успешно аплициравте", "Во ред", {
      duration: 2000
    });
  }  
}

