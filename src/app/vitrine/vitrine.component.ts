import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public listaProdutos: Produto[] = [
    {
      codigo: 1,
      nome: "Nintendo 64",
      descritivo: "Console Nintendo 64 Original (Seminovo). Acompanha: 2 controles; fonte de alimentação; cabo AV; 1 Controller Pak",
      imagem: "n64.png",
      valor: 430.00,
      valorPromo: 350.00,
      destaque: 1,
      estoque: 10
    },
    {
      codigo: 2,
      nome: "Mega Drive",
      descritivo: "Console Sega Mega Drive II Original (Seminovo). Acompanha: 2 controles; fonte de alimentação; cabo AV",
      imagem: "megadrive.png",
      valor: 350.00,
      valorPromo: 300.00,
      destaque: 1,
      estoque: 10
    },
    {
      codigo: 3,
      nome: "Game Boy Color",
      descritivo: "Portátil Game Boy Color Amarelo Original (Seminovo). Acompanha: 2 pilhas AA",
      imagem: "gameboycolor.png",
      valor: 650.00,
      valorPromo: 620.00,
      destaque: 1,
      estoque: 1
    },
    {
      codigo: 4,
      nome: "Game Gear",
      descritivo: "Portátil Sega Game Gear Original (Seminovo). Acompanha: 4 pilhas AA",
      imagem: "Sega-Game-Gear-WB.png",
      valor: 1500.00,
      valorPromo: 1220.00,
      destaque: 1,
      estoque: 1
    },
    {
      codigo: 5,
      nome: "Cartucho Sonic 3",
      descritivo: "Cartucho Sonic The Hedgehog 3 reprodução para o console Sega Mega Drive",
      imagem: "sonic3.png",
      valor: 100.00,
      valorPromo: 60.00,
      destaque: 1,
      estoque: 13
    },
    {
      codigo: 6,
      nome: "Cartucho Super Mario 64",
      descritivo: "Cartucho Super Mario 64 reprodução para o console Nintendo 64",
      imagem: "mario64.png",
      valor: 150.00,
      valorPromo: 100.00,
      destaque: 1,
      estoque: 13
    },
    {
      codigo: 7,
      nome: "Tv de tubo LG",
      descritivo: "Televisão de tubo LG, modelo 29FS4RL 29 polegadas",
      imagem: "tvtubolg.png",
      valor: 200.00,
      valorPromo: 100.00,
      destaque: 1,
      estoque: 1
    },
    {
      codigo: 8,
      nome: "Tv de tubo Semp Toshiba",
      descritivo: "Televisão de tubo Semp Toshiba, modelo 1452AV 14 polegadas",
      imagem: "tvtubotoshiba.png",
      valor: 150.00,
      valorPromo: 100.00,
      destaque: 1,
      estoque: 1
    }
  ]

  public produtoAchado: string = "";
  public achouProduto: number = 0;

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent | undefined;

  public produtosFiltrados: Produto[] = [];

  constructor(){
    this.produtosFiltrados = this.listaProdutos;
  }

  ngAfterViewInit() {
    if (this.headerComponent) { 
      this.headerComponent.buscarProduto.subscribe(textoBusca => {
        this.buscar(textoBusca);
      });
    }
  }

  public buscar(textoBusca: string){
    console.log("Texto de busca recebido:", textoBusca);
    if(!textoBusca.trim()){
      this.produtosFiltrados = this.listaProdutos;
      this.achouProduto = 0;
    }else{
      this.produtosFiltrados = this.listaProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(textoBusca.toLowerCase())
      );
      this.produtoAchado = textoBusca;
      this.achouProduto = 1;
    }
  }

  public entrarDetalhe(produto: Produto){
    localStorage.setItem("produtoEscolhido", JSON.stringify(produto));
    window.location.href="/detalhe";
  }
}
