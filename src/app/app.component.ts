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

  itemImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0Zw_UTiwwQwcgGMIdau3VtuouudsNodG-8dQFdtWXw&s'

  produto = this.numero1 * this.numero2;

  textAlt = "logo da empresa Olabi";

  isUnchanged = false;

  actionName = 'ação';

  name = 'Afrocódigos';

  logar() {
    console.log(this.produto);
  }
}
