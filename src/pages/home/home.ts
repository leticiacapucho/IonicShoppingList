import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


import { SistemaListService } from '../../services/sistema-list/sistema-list.service';
import { Observable } from 'rxjs/Observable';
import { Produto } from '../../interfaces/produto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sistemaList$ : Observable<Produto[]>; /* aqui eu criei shoppingList que representa um observable, onde,
  irá observar a lista de items, por isso o array de item:
  
      <Item[]>.
      
    */

  // privei o shopping para ser referencia ao ShoppingListService  
  constructor(public navCtrl: NavController, private sistema: SistemaListService) {
    // importando items do nosso item model
    this.sistemaList$ = this.sistema
      .getProdutoList() // retorna a lista de items do shopping | DB List
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