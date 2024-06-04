import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  ngOnInit() {
    this.logar();
  }

  logar() {
    console.log('Meu componente foi inicializado');
  }

  recebeMensagemDoComponenteFilho(mensagem: string) {
    this.mensagemDoFilho = mensagem;
  }

}
