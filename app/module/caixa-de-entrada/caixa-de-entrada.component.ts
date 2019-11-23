
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent {
  
  private _isNewEmailFormOpen = false; 
  messageErro;

  emailList = [];
  email = { destinatario: '', assunto: '', conteudo: ''}

  constructor(private emailService: EmailService){}

  get isNewEmailFormOpen(){
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm){
    if (formEmail.invalid) return;
    this.emailList.push(this.email)

    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          this.emailList.push(emailApi)
          this.email = {destinatario: '', assunto: '', conteudo: ''}
          formEmail.reset();
        },
        (responseError: HttpErrorResponse)=> this.messageErro = responseError.error.body
        //erro => console.error(erro)
      )

    this.email = { 
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
    formEmail.reset();
  }

}


