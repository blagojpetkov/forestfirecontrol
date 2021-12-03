import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainService } from '../_services/main.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  class="";
  service: MainService;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  constructor(service: MainService) {this.service = service }

  ngOnInit(): void {
  }
  
  public menuclick(){
    this.toggle.emit();
    console.log("navbar Opened = " + this.service.opened)
      if(this.class==="")
      this.class="rotate";
      else this.class="";
  }
  

}
