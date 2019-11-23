import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    api = 'http://localhost:3200/emails';
    cabecalho = new HttpHeaders({'Authorization': localStorage.getItem('TOKEN')});

    constructor(private http: HttpClient){}

    enviar({destinatario, assunto, conteudo, dataDeEnvio})
    {
        const emailParaApi = {
            to: destinatario, 
            subject: assunto,
            content: conteudo,
            dataDeEnvio: dataDeEnvio
        }

        return this.http
        .post(this.api, emailParaApi, {headers: this.cabecalho})
        .pipe<Email>(
            map(
                (emailParaApi: any) => {
                    return new Email({
                        destinatario: emailParaApi.to,
                        assunto: emailParaApi.subject,
                        conteudo: emailParaApi.content,
                        dataDeEnvio: emailParaApi.dataDeEnvio
                    })
                }
            )
        )
    }
}