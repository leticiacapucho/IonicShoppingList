import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Item } from "../../models/item/item.model";

@Injectable()
// Chamando uma nova classe
export class ShoppingListService {
    /*
            Criando referencia para o nosso banco de dados | o Ref é de referencia.
            Em seguida, é dito que queremos uma lista igual a está lista do shopping list. 

    */
    private shoppingListRef = this.db.list<Item>('shopping-list');

    /*
        Dentro do parenteses: 
            Criou um banco de dados (bd) privado, no qual, vai ser uma referência
        para o angular de um banco de dados

                this.db.list('shopping-list')

            Pode ser feito assim também:

                this.db.list<Item>('shopping-list');

            Quando inseri o <Item>, é dito que é um tipo de lista de compras importando seu item


    */
    constructor(private db: AngularFireDatabase){}
    /*
            Aqui vai obter uma referência a esta lista a fim de expor um método
        chamado getShoppingList.
            Além de que este método, é capaz de ver o item (item que foi adicionado
        no método addItem).
    */

    getShoppingList(){
    // pega a lista do shopping dos items 
        return this.shoppingListRef;
    }

    addItem(item: Item) {
    /*
            
        O item dentro do parenteses é para adicionar no banco de dados, ou seja,
      permite que elas possam serem adicionadas

         */

        return this.shoppingListRef.push(item);
    }    

    editItem(item: Item){
        return this.shoppingListRef.update(item.key, item);  /* 
            
            nos permite atualizar o item com base na chave de itens, ou seja,
        atualizar o item que selecionamos com base no caso
        
        */

    }

    removeItem(item: Item){
        return this.shoppingListRef.remove(item.key); /*

            remove o item aqui, removendo-o com base na chave   

        */
    }
}