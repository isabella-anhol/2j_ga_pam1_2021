import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login = 'Login usuário';
  senha = 'coxinha123';
  mensagem = '';

constructor() {}

  validar(): void{
    if(this.login === 'boiola' && this.senha === 'coxinha123'){
      this.mensagem = 'Usuário logado!'
    } else {
      this.mensagem = 'Falha na autenticação :('
    }
  }

}
