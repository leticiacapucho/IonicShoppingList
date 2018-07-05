import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast } from 'ionic-angular';
import { SistemaListService } from '../../../services/sistema-list/sistema-list.service';
import { ToastService } from '../../../services/toast/toast.service';
import { Usuario } from '../../../interfaces/usuario';

@IonicPage()
@Component({
  selector: 'page-edit-usuario',
  templateUrl: 'edit-usuario.html',
})
export class EditUserPage {

  usuario: Usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sistema: SistemaListService,
    private toast: ToastService) {
  }
  ionViewWillLoad() {

    //console.log('ionViewDidLoad EditShoppingItemPage');

    this.usuario = this.navParams.get('usuario'); 
  }


  saveUser(usuario: Usuario) { 

    this.sistema.editUser(usuario).then(() => {
      this.toast.show(`${usuario.nome} salvo!`);

      this.navCtrl.setRoot('EntrarPage');
      
    })
  }

  removeUser(usuario: Usuario){
    this.sistema.removeUser(usuario).then(()=> {
        this.toast.show(`${usuario.nome} deletado!`);
        this.navCtrl.setRoot('EntrarPage');
      })

  }
}
