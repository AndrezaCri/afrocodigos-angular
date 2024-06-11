import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ProdutosModule } from './produtos/produtos.module';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { GreetPipe } from './greet.pipe';
import { ItemService } from './item.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [ 
      BrowserModule,
      CarrinhoModule,
      ProdutosModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
    exports: [],
    declarations: [ 
      AppComponent,
      HighlightDirective,
      GreetPipe
    ],
    providers: [
      ItemService,
      DataService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
