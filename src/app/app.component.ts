import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EntrarPage } from '../pages/autenticacao/entrar/entrar';
import { AddProdutoPage } from '../pages/produto/add-produto/add-produto';
import { HomePage } from '../pages/home/home';

//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = EntrarPage;

  public pages = [
    { title: 'Home', componente: HomePage },
    { title: 'Cadastrar Produto', componente: AddProdutoPage},
  ];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

