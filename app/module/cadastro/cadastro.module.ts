import { NgModule } from '@angular/core'
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModules } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
    declarations:[
        CadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedComponentModules,
        CadastroRoutingModule
    ],
    exports: [CadastroComponent]
})
export class CadastroModule{ }