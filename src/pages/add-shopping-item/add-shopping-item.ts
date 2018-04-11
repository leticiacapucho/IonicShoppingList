import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = { // Esse Item, foi importado daqui no model
    name: '', //está se comportando como vazio o nome
    quantity: undefined, // está como indefinido
    price: undefined,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    /*  
          Foi colocado no construtor o shopping para que as listas
        sejam importadas para a nossa página
    */
    private shopping: ShoppingListService,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item) {
    /*
        Aqui quer dizer para adicionar o item em shopping:
  
            this.shopping.addItem(item)
  
          então pegar uma referencia de volta e exibir no console log
  
            .then(ref=>{
              console.log(ref.key); // dentro é o item que vamos adicionar
            }
    */
    this.shopping.addItem(item).then(ref => {
      this.navCtrl.setRoot('HomePage', { key: ref.key }) // aqui ele tá adicionando o item e indo para a página inicial
    })
  }
}
