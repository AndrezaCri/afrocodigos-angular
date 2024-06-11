import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/produtos', pathMatch: 'full'},
    { path: 'produtos', component: ProdutosComponent },
    { 
        path : 'carrinho',
        component: CarrinhoComponent
    }
];
