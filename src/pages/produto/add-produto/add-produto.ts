import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../../interfaces/produto';
import { SistemaListService } from '../../../services/sistema-list/sistema-list.service';
import { ToastService } from '../../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-produto',
  templateUrl: 'add-produto.html',
})
export class AddProdutoPage {
 
  item: Produto = { // Esse Item, foi importado daqui no model
    nome: '', //está se comportando como vazio o nome
    descricao: '',
    preco: undefined,
    percentual: undefined,
    saldo: undefined
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    /*  
          Foi colocado no construtor o shopping para que as listas
        sejam importadas para a nossa página
    */
    private sistema: SistemaListService,
    private toast: ToastService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProdutoPage');
  }

  addItem(item: Produto) {
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
    this.sistema.addItem(item).then(ref => {
      this.toast.show(`${item.nome} adicionado!`); /* Ao clicar em add na aba que abriu no editor,
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
