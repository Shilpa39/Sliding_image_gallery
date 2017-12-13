import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

ind: number;
imageArray: any;

  constructor(public navCtrl: NavController, public modalController: ModalController, private _http: Http) {
    this.ind=0;
    this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Image')
    .subscribe(res => {
        this.imageArray = res.json().Image;
    });
  }

  openmodal(){
    let modal = this.modalController.create(ModalPage);
    modal.present();
  }






//-------Code For Swipe-------------
  slide = [{ image: "assets/imgs/img2.jpg",num:1 },{ image: "assets/imgs/logo.png",num:2 }, { image: "assets/imgs/logo.png",num:3 },  { image: "assets/imgs/img2.jpg",num:4 }]
  

nextimg()
{if(this.ind==this.imageArray.length)
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
   this.ind=this.imageArray.length;
 }
else
 {
this.ind = this.ind-1;
 }}

}
