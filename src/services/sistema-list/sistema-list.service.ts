import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Produto } from "../../interfaces/produto";
import { Usuario } from "../../interfaces/usuario";

@Injectable()
// Chamando uma nova classe
export class SistemaListService {
    /*
        Criando referencia para o nosso banco de dados | o Ref é de referencia.
        Em seguida, é dito que queremos uma lista igual a está lista, no caso, db da lista
    */
    private produtoListRef = this.db.list<Produto>('produto-list');
    private usuarioListRef = this.db.list<Usuario>('usuario-list');
    /*
        Dentro do parenteses: 
            Criou um banco de dados (bd) privado, no qual, vai ser uma referência
        para o angular de um banco de dados, ou seja, o que está dentro é a tabela.

        <Produto> - uma lista que está sendo importada no meu produto
    */
    constructor(private db: AngularFireDatabase){}

    // Métodos Usuários
    getUser(){
        return this.usuarioListRef;
    }

    addUser(usuario: Usuario){
        return this.usuarioListRef.push(usuario);
    }

    editUser(usuario: Usuario){
        return this.usuarioListRef.update(usuario.key, usuario);
    }

    removeUser(usuario: Usuario){
        return this.usuarioListRef.remove(usuario.key); 
    }
    
// --------------------------------------------------------------

    // Métodos Produtos
    getProdutoList(){
    // pega a lista do shopping dos items 
        return this.produtoListRef;
    }

    addItem(item: Produto) {
        /*
            O item dentro do parenteses é para adicionar no banco de dados, ou seja,
      permite que elas possam serem adicionadas
         */
        return this.produtoListRef.push(item);
    }    

    editItem(item: Produto){
        return this.produtoListRef.update(item.key, item); 
         /* 
            nos permite atualizar o item com base na chave de itens, ou seja,
        atualizar o item que selecionamos com base no caso
        */
    }

    removeItem(item: Produto){
        return this.produtoListRef.remove(item.key); 
        /*
            remove o item aqui, removendo-o com base na chave   
        */
    }
}