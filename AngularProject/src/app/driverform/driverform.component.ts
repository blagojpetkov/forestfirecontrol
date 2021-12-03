import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-driverform',
  templateUrl: './driverform.component.html',
  styleUrls: ['./driverform.component.css']
})
export class DriverformComponent implements OnInit {
  router: Router
  @ViewChild('form', {static:false}) form!:NgForm;
  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log(this.form.value);
    console.log(this.form.status);
    this.router.navigate(['home'])
  }

}
