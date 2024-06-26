import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { DataService } from './data.service';
import { Router } from '@angular/router';

interface ResponseAPI {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private itemService: ItemService,
    private dataService: DataService,
    private router: Router
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

  titleResponse = '';

  titleResponseArray = '';


  ngOnInit() {
    this.logar();
    this.saveItem('afrocodigos', 'curso de Angular');
    this.itemService.setItemStorage('angular', 'aula de Service');

   if (this.itemService.getItemStorage('angular')) {
    this.name = this.itemService.getItemStorage('angular')!;
   }

    this.getData();
    this.getDataArray();
    this.postData();
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

  getData() {
    this.dataService.get<ResponseAPI>('http://jsonplaceholder.typicode.com/posts/2')
      .subscribe((response: ResponseAPI) => {
        console.log('Resposta do GET Data', response);
        this.titleResponse = response.title;
      });
  }

  getDataArray(){
    this.dataService.get<any>('http://localhost:3000/data')
    .subscribe((response: any) => {
      console.log('Resposta do GET', response);
      this.titleResponseArray = response[0].title;
    });
  }

  postData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const body = {
      title: 'Título',
      body: 'Body',
      userId: 76,
    };

    this.dataService.post<ResponseAPI>(url, body)
      .subscribe((res: ResponseAPI) => {
        console.log('resposta do POST', res);
      });
  }

  irParaCarrinho() {
    this.router.navigate(['/carrinho']);
  }



}
