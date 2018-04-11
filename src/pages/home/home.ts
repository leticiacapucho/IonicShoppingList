import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>; /* aqui eu criei shoppingList que representa um observable, onde,
  irá observar a lista de items, por isso o array de item:
  
      <Item[]>.
      
    */

  // privei o shopping para ser referencia ao ShoppingListService  
  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
    // importando items do nosso item model
    this.shoppingList$ = this.shopping
      .getShoppingList() // retorna a lista de items do shopping | DB List
      .snapshotChanges() // permite pegar ambos, a chave e o valor | Chave e valor

      //  .valueChanges() // pega os valores mudados

      /*  
          Mapea os itens retornados da lista de alterações e para cada alteração que 
        queremos devolver.

      */
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }
/*
  {
  key: 'value-here',
    name: 'Ipad Pro'
}*/
}
