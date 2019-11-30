import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HeaderDataService{
    
    valorDoFiltro = new Subject<string>();

    constructor(){
        this.atualizarTermoDeFiltro('')
    }

    atualizarTermoDeFiltro(novoValor: string)
    {
        this.valorDoFiltro.next(novoValor);
    }
}