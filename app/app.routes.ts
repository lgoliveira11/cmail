import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';

const rotas: Routes = [
    { path: 'inbox', 
        loadChildren: ()=> import('./module/caixa-de-entrada/caixa-de-entrada.module').then(m=> m.CaixaDeEntradaModule)},
    { path: 'cadastro', 
        loadChildren: ()=> import('./module/cadastro/cadastro.module').then(m=> m.CadastroModule)},
    { path: 'login',
        loadChildren: () => import('./module/login/login.module').then(m=> m.LoginModule)},
    { path: '', pathMatch: 'full', redirectTo: 'inbox'},
    { path: '**', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
