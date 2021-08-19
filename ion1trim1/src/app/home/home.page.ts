import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  n1 = null;
  n2 = null;
  resposta = '';

constructor() {}

  somar(): void{
    this.resposta = this.n1 + this.n2
    }
  subtrair(): void{
    this.resposta = (this.n1 - this.n2).toString();
  }
  multiplicar(): void{
  }
  dividir(): void{

  }


  }
