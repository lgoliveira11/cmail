import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles:	[`ul,	li	{
					margin:	0;
					padding:	0;
					list-style-type:	none;
			}
	`]
})
export class CaixaDeEntradaComponent {
  
  messageErro;

  emailList = [];
  email = { destinatario: '', assunto: '', conteudo: '', dataDeEnvio: '' }

  termoParaFiltro='';

  constructor(private emailService: EmailService, 
    private pageDataService: PageDataService, 
    private headerService: HeaderDataService){}

  ngOnInit(){
   this.listar()
   this.pageDataService.defineTitulo('Caixa de entrada - CMail')
   this.headerService
    .valorDoFiltro
    .subscribe(novoValor => this.termoParaFiltro = novoValor)
  }

  private _isNewEmailFormOpen = false; 
  get isNewEmailFormOpen(){
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  listar()
  {
    this.emailService
    .listar()
    .subscribe( lista => { this.emailList = lista; } )
  }
  
  handleNewEmail(formEmail: NgForm){
    if (formEmail.invalid) return;
    //this.emailList.push(this.email)

    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          this.emailList.push(emailApi)
          this.email = {destinatario: '', assunto: '', conteudo: '', dataDeEnvio: '' }
          formEmail.reset();
        },
        (responseError: HttpErrorResponse)=> this.messageErro = responseError.error.body
        //erro => console.error(erro)
      )

    this.email = { 
      destinatario: '',
      assunto: '',
      conteudo: '',
      dataDeEnvio: ''
    }
    formEmail.reset();
  }

  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log(eventoVaiRemover);
    if (eventoVaiRemover.status === 'removing')
    {
      this.emailService
        .deletar(emailId)
        .subscribe(
          res => { 
            console.log(res);
            this.listar();
          }
          , err => console.error(err)
        )
    }
  }

  filtrarEmailsPorAssunto3()	{
      if (this.termoParaFiltro)
      {
        return this.emailList.filter(	email	=>	{
            return	email.assunto.includes(this.termoParaFiltro)
        })
      }
      else {
        return this.emailList;
      }
    }

  filtrarEmailsPorAssunto()	{
    if (this.termoParaFiltro)
    {
      const	termoParaFiltroEmMinusculo	=	this.termoParaFiltro.toLowerCase();
      return this.emailList.filter(	email	=>	{
          const	assunto	=	email.assunto.toLowerCase()
          return	assunto.includes(termoParaFiltroEmMinusculo)
      })
    }
    else
      return this.emailList;
  }

  filtrarEmailsPorAssunto2()	{
    return this.emailList;
  }

}


