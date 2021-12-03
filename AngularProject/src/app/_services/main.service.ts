import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public opened = false;
  constructor() { }
  public flip(){
    this.opened = !this.opened;
  }
}
