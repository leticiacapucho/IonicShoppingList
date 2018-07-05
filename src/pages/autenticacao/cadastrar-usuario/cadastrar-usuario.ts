import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SistemaListService } from '../../../services/sistema-list/sistema-list.service';
import { ToastService } from '../../../services/toast/toast.service';
import { Usuario } from '../../../interfaces/usuario';

@IonicPage()
@Component({
  selector: 'page-cadastrar-usuario',
  templateUrl: 'cadastrar-usuario.html',
})
export class CadastrarUserPage {
 
  usuario: Usuario = { // Esse Item, foi importado daqui no model
    nome: '', //está se comportando como vazio o nome
    endereco: '',
    bairro: '',
    cep: '',
    cidade: '',
    email: '',
    uf: '',
   // telefone: undefined,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    /*  
          Foi colocado no construtor o shopping para que as listas
        sejam importadas para a nossa página
    */
    private sistema: SistemaListService,
    private toast: ToastService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarUserPage');
  }

  addUser(usuario: Usuario) {
  
    this.sistema.addUser(usuario).then(ref => {
      this.toast.show(`${usuario.nome} adicionado!`);
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })
  }
}
