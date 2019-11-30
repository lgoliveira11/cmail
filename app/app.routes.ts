import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const rotas: Routes = [
    { 
        path: 'inbox', 
        loadChildren: ()=> import('./module/caixa-de-entrada/caixa-de-entrada.module').then(m=> m.CaixaDeEntradaModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'cadastro', 
        loadChildren: ()=> import('./module/cadastro/cadastro.module').then(m=> m.CadastroModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'login',
        loadChildren: () => import('./module/login/login.module').then(m=> m.LoginModule)
    },
    { 
        path: 'logout',
        loadChildren: () => import('./module/login/login.module').then(m=> m.LoginModule)
    },
    { 
        path: '', pathMatch: 'full', redirectTo: 'login'
    },
    {
         path: '**', pathMatch: 'full', redirectTo: 'login'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule{}
