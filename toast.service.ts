import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastService {
    constructor(private toastCtrl: ToastController){}
        // esse 3000 equivale 3 segundos
        show(message: string, duration: number = 3000){
            return this.toastCtrl
            .create({
                message,
                duration
            })
            .present();

    }
}