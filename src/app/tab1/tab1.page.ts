
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  public valor1!: string;
  public valor2!: string;
  private resultado!: number;

  constructor() {}

  calcular(){
    this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2);
  }
  exibirResultado(){
    return this.resultado;
  }

}
