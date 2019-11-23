import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError} from "rxjs/operators";
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})

export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))

  })

  // Mensagem de erro
  mensagensErro;
  
  validaImagem(campoDoFormulario:	FormControl)	{
    return this.httpClient
        .head(campoDoFormulario.value, {observe:	'response' })
            .pipe( map((response:	HttpResponseBase)	=>	{
                return	response.ok	?	null	:	{	urlInvalida:	true	}}),
                  catchError((error)	=>	{
                    return	[{	urlInvalida:	true	}] })
            )
  }    


  constructor(private httpClient: HttpClient, private roteador: Router ) { }

  ngOnInit() {
  }

  handleCadastrarUsuario()
  {
      if (this.formCadastro.valid) {
      
      const userData = new User(this.formCadastro.value);

      this.httpClient
        .post('http://localhost:3200/users', userData)
        .subscribe(
          (response) => { console.log("Cadastrado com sucesso");
          this.formCadastro.reset();
          // após 1 segundo, redireciona para a rota do login
          setTimeout(() => {
            this.roteador.navigate(['']);
          }, 1000);
        }
        , (responseError: HttpErrorResponse) => { 
          if (responseError.error.body)
            this.mensagensErro = responseError.error.body;
          else
            this.mensagensErro = [{ value: responseError.status, message: responseError.message}];
        }
       ) 

    }
    else { 
      this.validarTodosOsCamposDoFormulario(this.formCadastro)
      // alert('Campos precisam ser preenchidos!')
      // console.log('Campos precisam ser preenchidos!')
    }
  }


  

  validarTodosOsCamposDoFormulario(form: FormGroup)
  {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({onlySelf:true });
    })
  }

}
