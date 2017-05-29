import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  templateUrl: 'login.html'
})
export class LoginPage { 
  constructor(private nav: NavController){}


  goToPiano(){
    this.nav.push(TabsPage);
  }
}