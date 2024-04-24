import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() buscarProduto: EventEmitter<string> = new EventEmitter<string>();

  public nomeCliente: string = "";

  constructor(){
    let json = localStorage.getItem("meuNome");

    if(json==null){
      this.nomeCliente = "";
    } else {
      this.nomeCliente = `Olá ${json}!`;
    }
  }

  emitirBusca(textoBusca: string) {
    if(textoBusca != null && textoBusca.trim() !== ""){
      this.buscarProduto.emit(textoBusca);
    }
  }

  emitirInputVazio(textoBusca: string) {
    if (!textoBusca.trim()) { // Se o campo de busca estiver vazio
      this.buscarProduto.emit(''); // Emitir um evento de busca vazio
    }
  }
}
