import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { CadastrarUserPage } from '../cadastrar-usuario/cadastrar-usuario';

@IonicPage()
@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {

  email: string ='';
  senha: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrarPage');
  }

  efetuaLogin() {
    console.log(this.email);
    console.log(this.senha);

    this.navCtrl.setRoot(HomePage); // acessando o home do user
  }

  inscreverUser() {
    this.navCtrl.setRoot(CadastrarUserPage);
  }

}
