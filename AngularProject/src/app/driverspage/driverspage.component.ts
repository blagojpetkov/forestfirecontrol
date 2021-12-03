import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Driver {
  name: string;
  phone: string;
  time: string;
  fromto: string;
}

const ELEMENT_DATA: Driver[] = [
  {name: 'Никола Николовски', phone: "+389 77 777 777", time: "07:15", fromto: "Штип - Неготино"},
  {name: 'Кирил Кириловски', phone: "+389 75 555 555", time: "08:20", fromto: "Виница - Неготино"},
  {name: 'Стефан Стефановски', phone: "+389 71 111 111", time: "09:30", fromto: "Виница - Свети Николе"},
  {name: 'Ангела Ангелевска', phone: "+389 72 222 222", time: "15:50", fromto: "Скопје - Македонски Брод"},
  {name: 'Маја Мајовска', phone: "+389 73 333 333", time: "07:15", fromto: "Охрид - Битола"},
  {name: 'Стефанија Стефановска', phone: "+389 77 777 777", time: "16:20", fromto: "Штип - Скопје"},
  {name: 'Даниел Даниеловски', phone: "+389 79 999 999", time: "18:25", fromto: "Свети Николе - Неготино"},
  {name: 'Александар Александровски', phone: "+389 74 444 444", time: "06:30", fromto: "Свети Николе - Скопје"},
  {name: 'Фросина Фросиновска', phone: "+389 72 222 222", time: "05:50", fromto: "Струмица - Виница"},
  {name: 'Невена Невеновска', phone: "+389 75 555 555", time: "08:20", fromto: "Радовиш - Македонски Брод"},
];

@Component({
  selector: 'app-driverspage',
  templateUrl: './driverspage.component.html',
  styleUrls: ['./driverspage.component.css']
})
export class DriverspageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'time', 'fromto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
