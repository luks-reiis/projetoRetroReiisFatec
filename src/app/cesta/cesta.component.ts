import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Item } from '../model/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  public lista: Item[] = [];
  public mensagem: String = "";
  public totalCesta: number = 0;

  constructor(){
    let json = localStorage.getItem("cesta");
    if(json==null){
      this.mensagem = "Sua cesta de compras esta vazia!";
    } 
    else {
      this.lista = JSON.parse(json);
      for(let item of this.lista){
        this.totalCesta += item.total;
      }
    }
  }

  limpar(){
    window.location.href="";
    this.lista = [];
    localStorage.removeItem("cesta");
    this.totalCesta = 0;
  }
}
