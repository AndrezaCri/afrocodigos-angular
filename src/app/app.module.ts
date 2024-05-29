import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ProdutosModule } from './produtos/produtos.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ 
      BrowserModule,
      CarrinhoModule,
      ProdutosModule,
      FormsModule
    ],
    exports: [],
    declarations: [ 
      AppComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
