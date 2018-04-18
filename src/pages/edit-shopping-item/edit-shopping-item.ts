import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast } from 'ionic-angular';
import { Item } from '../../models/item/item.model';

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService) {
  }
  /*
      Estava como ionViewDidLoad() - que significa vista de ions carregou,
    agora foi colocado o will, ficando como: ionViewWillLoad - que significa
    vista de íon carregará

  */
  ionViewWillLoad() {

    //console.log('ionViewDidLoad EditShoppingItemPage');

    this.item = this.navParams.get('item'); /* Após ser clicado em um dos items exibidos, vai abrir uma página. 
    Quando está página for aberta, olhar no console (na página, quando é especionado elemento), neste momento, 
    será exibido uma chave (informações). Essa chave se refere a página que foi aberta.

    anteriormente estava como console.log(this.navParams.get('item'));

================================================================================================================================
    */
  }


  /* 
================================================================================================================================

     Para criar a função, primeiro é necessário ir:

        shopping-list-service.ts

        e criar a função: editItem(), depois passar como parametro item: Item
   */

  saveItem(item: Item) { /* Colocamos dentro do parenteses para dizer que:
       vamos fazer o save item pegar um item do tipo item.

================================================================================================================================

       
  */

    this.shopping.editItem(item).then(() => {
      this.toast.show(`${item.name} salvo!`); /* Ao clicar em salvar na aba que abriu no editor,
          é carregado ao menu inicial, que é a homePage, onde tem todos os items cadastrados. Quando
          cair na homePage, sobe uma mensagem informando de que foi salvo o item, por exemplo:
          
            Estava iPad Pro, e quis alterar para iPad Pro 2, eu clico nesse primeiro iPad, na sua forma
          anterior, depois altero inseirindo o 2 na frente e salvo. Após fazer isso caiu na minha lista
          já cadastrada de items, sobe uma mensagem dizendo "iPad Pro 2 salvo!"

            Se eu quiser adicionar uma vírgula, insiro no meu código assim:

              `${item.name}, salvo!`

          Quando aparecer a mensagem subindo ficará como: iPad Pro 2, salvo!
      */
      this.navCtrl.setRoot('HomePage');
      
    })
  }
  /* 
  
================================================================================================================================
  
  */

  removeItem(item: Item){
    this.shopping.removeItem(item).then(()=> {
        this.toast.show(`${item.name} deletado!`);
        this.navCtrl.setRoot('HomePage');
      })

  }
}
