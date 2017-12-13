import {Component} from '@angular/core';
import {ViewController,ActionSheetController} from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';
import {File} from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
    selector:'page-modal',
    templateUrl:'./modal.html'
})

export class ModalPage{

fileTransfer: FileTransferObject = this.transfer.create();

    constructor(public viewController: ViewController, 
                public actionSheetCtrl: ActionSheetController, 
                private socialSharing: SocialSharing,
                private transfer: FileTransfer,
                private file: File){

    }

    closemodal(){
        this.viewController.dismiss();
    }

    share(){
        this.socialSharing.share('','','https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.0-9/24796832_1740563949349885_3755678029365822424_n.jpg?oh=bcb3b741af0b436ffd8a0522cd13a427&oe=5AD577C5','');
    }

    saveimage(){
        this.fileTransfer.download('https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.0-9/24796832_1740563949349885_3755678029365822424_n.jpg?oh=bcb3b741af0b436ffd8a0522cd13a427&oe=5AD577C5',this.file.externalDataDirectory + 'image.jpg')
                                    .then((entry) => {
                                        console.log('download complete: ' + entry.toURL());
                                        }, (error) => {
                                        // handle error
                                    });
    }
}
