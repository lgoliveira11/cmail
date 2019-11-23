import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';


const rotasCadastro: Routes = [ 
    {path: '', component: LoginComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(rotasCadastro)],
    exports: [ RouterModule ]
})
export class LoginRoutingModule{ }