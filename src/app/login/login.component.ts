import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public mensagem: string = "";

  public cliente: Cliente = new Cliente();

  public entrar(){
    if(this.cliente.email=="lucao@email.com" && this.cliente.senha=="12345"){
      localStorage.setItem("meuNome", "Lucão");
      window.location.href="";
    } else {
      this.mensagem = "E-mail e/ou senha inválidos!";
    }
  }

  public redCadastro(){
    window.location.href="cadastro";
  }


}
