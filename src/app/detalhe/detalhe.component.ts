import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Produto } from '../model/produto';


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
}
