import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
this.ind=0;

  }

  slide = [{ image: "assets/imgs/fruit1.jpg",num:1 },{ image: "assets/imgs/fruit2.jpg",num:2 }, { image: "assets/imgs/fruit3.jpg",num:3 },  { image: "assets/imgs/fruit4.jpg",num:4 }]

ind: number;

nextimg()
{if(this.ind==3)
 {
   this.ind=0;
 }
else
 {
this.ind = this.ind+1;
 }}

previmg()
{if(this.ind==0)
 {
   this.ind=3;
 }
else
 {
this.ind = this.ind-1;
 }}

}
