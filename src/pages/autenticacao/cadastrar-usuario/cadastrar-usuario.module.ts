import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarUserPage } from './cadastrar-usuario';

@NgModule({
  declarations: [
    CadastrarUserPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarUserPage),
  ],
})
export class CadastrarPageModule {}
