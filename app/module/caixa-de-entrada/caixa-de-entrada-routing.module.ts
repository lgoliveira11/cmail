import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';


const rotasCadastro: Routes = [ 
    {path: '', component: CaixaDeEntradaComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(rotasCadastro)],
    exports: [ RouterModule ]
})
export class CaixaDeEntradaRoutingModule{ }