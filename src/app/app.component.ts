import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private itemService: ItemService
  ) {}

  title = 'Afrocódigos';

  texto = 'mensagem alterada no app.component';

  mensagemDoFilho = '';

  numero1 = 8;
  numero2 = 5;

  itemImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0Zw_UTiwwQwcgGMIdau3VtuouudsNodG-8dQFdtWXw&s'

  produto = this.numero1 * this.numero2;

  textAlt = "logo da empresa Olabi";

  isUnchanged = false;

  actionName = 'ação';

  name = 'Afrocódigos';

  birthday = new Date();

  ngOnInit() {
    this.logar();
    this.saveItem('afrocodigos', 'curso de Angular');
    this.itemService.setItemStorage('angular', 'aula de Service');

   if (this.itemService.getItemStorage('angular')) {
    this.name = this.itemService.getItemStorage('angular')!;
   }

  }

  logar() {
    console.log('Meu componente foi inicializado');
  }

  recebeMensagemDoComponenteFilho(mensagem: string) {
    this.mensagemDoFilho = mensagem;
  }

  saveItem(key: string, value: string) {
    this.itemService.setItemStorage(key, value);
  }

  clearSessionStorage() {
    this.itemService.clearStorage();
  }

  removeItemSessionStorage(key: string) {
    this.itemService.removeItemStorage(key);
  }

}
