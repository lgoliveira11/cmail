import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService} from 'src/app/services/login.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemErro: any;
  login = { email:'', password:'' }


  constructor(private loginService: LoginService,
      private roteador: Router) { }

  ngOnInit() { }

  handleLogin(formLogin: NgForm){
    if (formLogin.valid)
    {
       this.loginService
        .logar(this.login)
        .subscribe(
          () => this.roteador.navigate(['/inbox']),
          (responseError: HttpErrorResponse)=> this.mensagemErro = responseError.error 
        ) 
    }
  }

  
  /*
  handleLoginOld(formLogin: NgForm)
  {
    if (formLogin.valid){
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
           (response: any) => {
            localStorage.setItem('cmail-token', response.token);
            console.log("deu certo");
            console.log("Token:", localStorage.getItem('cmail-token'));
          },
          //(response) =>  {  console.log(response);
          //  console.log("deu certo");
          //},
          (responseError: HttpErrorResponse) => {
           // this.mensagemErro = responseError.error.body }
           console.error(responseError)
           if (responseError.error.body)
           {
              if (responseError.error.body.errors)
              {
                if (responseError.error.body.errors.body)
                  this.mensagemErro = responseError.error.body.errors.body;
                else
                  this.mensagemErro = responseError.error.body.errors;
              }
           }
           else if (responseError.error.message)
            this.mensagemErro = responseError.error;
           else
            this.mensagemErro = responseError; 
          console.error("Mensagem Erro: ", this.mensagemErro); }

          //(error) => {
          // console.error(error);
          //  console.log('deu ruim');  }
        )
    }
  }
  */
}
