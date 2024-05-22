import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
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
