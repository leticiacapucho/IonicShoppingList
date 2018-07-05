import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';

import { SistemaListService } from '../services/sistema-list/sistema-list.service';
import { ToastService } from '../services/toast/toast.service';
import { HomePage } from '../pages/home/home';
import { EntrarPage } from '../pages/autenticacao/entrar/entrar';
import { EditUserPage } from '../pages/autenticacao/edit-usuario/edit-usuario';
import { CadastrarUserPage } from '../pages/autenticacao/cadastrar-usuario/cadastrar-usuario';
import { AddProdutoPage } from '../pages/produto/add-produto/add-produto';
import { EditProdutoPage } from '../pages/produto/edit-produto/edit-produto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntrarPage,
    CadastrarUserPage,
    EditUserPage,
    AddProdutoPage,
    EditProdutoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntrarPage,
    CadastrarUserPage,
    EditUserPage,
    AddProdutoPage,
    EditProdutoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SistemaListService,
    ToastService,
  ],
})
export class AppModule {}
