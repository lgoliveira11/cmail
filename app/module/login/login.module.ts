import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service'
import { SharedComponentModules } from 'src/app/components/shared-components.module';

@NgModule({
    declarations:[
       LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        HttpClientModule,
        SharedComponentModules
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule{ }