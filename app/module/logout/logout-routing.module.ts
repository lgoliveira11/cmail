import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout.component';


const rotasCadastro: Routes = [ 
    {path: '', component: LogoutComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(rotasCadastro)],
    exports: [ RouterModule ]
})
export class LogoutRoutingModule{ }