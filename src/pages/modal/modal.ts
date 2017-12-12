import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
    selector:'page-modal',
    templateUrl:'./modal.html'
})

export class ModalPage{

    constructor(public viewController: ViewController){

    }

    closemodal(){
        this.viewController.dismiss();
    }
}