import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ProdutosCarrinho {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  @Input() mensagem = '';

  @Output() mensagemDoFilhoParaOPai = new EventEmitter<string>();

  isSpecial = true;

  receptStyle = true;

  showText = 1;

  // produtosCarrinho = ['Notebook', 'Teclado', 'Mouse', 'Mousepad'];

  statusProduto = 'pode vender';

  produtosCarrinho: ProdutosCarrinho[] = [
    { id: 1, nome: 'Notebook' },
    { id: 2, nome: 'Teclado' },
    { id: 3, nome: 'Mouse' },
    { id: 4, nome: 'Mousepad' }
  ];


  trackByItems(index: number, item: ProdutosCarrinho): number {
    return item.id;
  }

  emiteMensagemDoFilhoParaOPai() {
    this.mensagemDoFilhoParaOPai.emit('Mensagem do produtos.component para o app.component');
  }


}
