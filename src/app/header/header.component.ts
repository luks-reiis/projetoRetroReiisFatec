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
