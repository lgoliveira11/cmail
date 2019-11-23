import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[CmailFormField]'
})
export class CmailFormFieldDirective implements OnInit{
    constructor(private campo: ElementRef) { }
    ngOnInit() { 
        const campo = this.campo.nativeElement as HTMLInputElement;

        if (campo.name){
            campo.id = campo.name;
            campo.setAttribute('placeholder', '');
            campo.classList.add('mdl-textfield__input');
        }
        else 
        {
            throw new Error('Atributo nome é obrigatório');
        }
    }
}