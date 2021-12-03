import { Component, OnInit } from '@angular/core';
import { MainService } from '../_services/main.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  class="";
  service: MainService;
  constructor(service: MainService) {this.service = service }

  ngOnInit(): void {
  }

  public menuclick(){
    this.service.opened=!this.service.opened;
    console.log("navbar Opened = " + this.service.opened)
      if(this.class==="")
      this.class="rotate";
      else this.class="";
  }
  

}
