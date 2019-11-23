import { NgModule } from '@angular/core'
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

@NgModule({
    declarations: [HeaderComponent, CmailFormFieldDirective, CmailFormGroupComponent, CmailListItemComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, CmailFormFieldDirective, CmailFormGroupComponent, CmailListItemComponent]
})
export class SharedComponentModules { }