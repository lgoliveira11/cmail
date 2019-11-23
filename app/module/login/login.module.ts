import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service'

@NgModule({
    declarations:[
       LoginComponent,
       CmailFormGroupComponent,
       CmailFormFieldDirective
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule{ }