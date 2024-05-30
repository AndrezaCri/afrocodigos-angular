import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ProdutosModule } from './produtos/produtos.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    imports: [ 
      BrowserModule,
      CarrinhoModule,
      ProdutosModule,
      FormsModule
    ],
    exports: [],
    declarations: [ 
      AppComponent,
      HighlightDirective
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
