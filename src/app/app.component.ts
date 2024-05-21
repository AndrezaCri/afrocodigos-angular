import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, CarrinhoComponent, CommonModule]
})
export class AppComponent {
  title = 'Afrocódigos';

  numero1 = 2;
  numero2 = 5;

  produto = this.numero1 * this.numero2;

  logar() {
    console.log(this.produto);
  }
}
