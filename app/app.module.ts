import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPorAssunto } from './module/caixa-de-entrada/filtro-por-assunto.pipe';
import { CaixaDeEntradaComponent } from './module/caixa-de-entrada/caixa-de-entrada.component';


@NgModule({
  declarations: [  
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
