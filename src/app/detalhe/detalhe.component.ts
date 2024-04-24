import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Produto } from '../model/produto';
import { Item } from '../model/item';


@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  public produtoEscolhido: Produto = new Produto();

  public constructor(){
    if (typeof localStorage !== 'undefined') {
      let json = localStorage.getItem("produtoEscolhido");
      if(json==null){
        window.location.href="";
      }else{
        this.produtoEscolhido = JSON.parse(json);
      }
    } else {
      window.location.href="";
    }
  }

  public comprar(produto: Produto){
    let novo: Item = new Item();
    novo.codigoProduto = produto.codigo;
    novo.nomeProduto = produto.nome;
    novo.valor = produto.valor;
    novo.qtd = 1;
    novo.total = produto.valor;
    let lista : Item[] = [];
    let json = localStorage.getItem("cesta");
    if(json==null){
      lista.push(novo);  
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }  
    localStorage.setItem("cesta",JSON.stringify(lista));
    window.location.href="./cesta";
  }

}
