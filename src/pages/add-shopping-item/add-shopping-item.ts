import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Item } from '../../models/item/item.model';
import { ToastService } from '../../services/toast/toast.service';


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
    private toast: ToastService,
  ) {}

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
================================================================================================================================

        Para adicionar um novo item, clicar no +, na barra de menu superior, lado direito.
        
    */
    this.shopping.addItem(item).then(ref => {
      this.toast.show(`${item.name} adicionado!`); /* Ao clicar em add na aba que abriu no editor,
      é carregado ao menu inicial, que é a homePage, onde tem todos os items cadastrados. Quando
      cair na homePage, sobe uma mensagem informando de que foi adicionado o item.

        Se eu quiser adicionar uma vírgula, insiro no meu código assim:

          `${item.name}, adicionado!`

          Quando aparecer a mensagem subindo ficará como: Iphone 6, adicionado!

================================================================================================================================
          
  */
      this.navCtrl.setRoot('HomePage', { key: ref.key }) // aqui ele tá adicionando o item e indo para a página inicial
    })
  }
}
