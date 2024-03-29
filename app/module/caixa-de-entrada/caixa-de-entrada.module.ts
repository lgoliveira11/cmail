import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentModules } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { FiltroPorAssunto } from './filtro-por-assunto.pipe';



@NgModule({
  declarations: [CaixaDeEntradaComponent,
    FiltroPorAssunto],
  imports: [
    CommonModule, 
    FormsModule,
    SharedComponentModules,
    CaixaDeEntradaRoutingModule
  ],
  exports: [CaixaDeEntradaComponent]
})
export class CaixaDeEntradaModule { }
