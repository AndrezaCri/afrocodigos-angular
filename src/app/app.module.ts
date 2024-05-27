import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
    imports: [ 
      BrowserModule,
      CarrinhoModule,
      ProdutosModule
    ],
    exports: [],
    declarations: [ 
      AppComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
