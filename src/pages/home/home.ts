import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

ind: number;

  constructor(public navCtrl: NavController, public modalController: ModalController) {
    this.ind=0;
  }

  openmodal(){
    let modal = this.modalController.create(ModalPage);
    modal.present();
  }






//-------Code For Swipe-------------
  slide = [{ image: "assets/imgs/img2.jpg",num:1 },{ image: "assets/imgs/logo.png",num:2 }, { image: "assets/imgs/logo.png",num:3 },  { image: "assets/imgs/img2.jpg",num:4 }]

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
