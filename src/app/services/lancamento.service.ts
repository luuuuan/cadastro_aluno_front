import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lancamento } from '../models/lancamento.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  salvarLancamentos(lancamentos: Lancamento[]): Observable<any> {
    console.log("Enviando dados ao backend:", lancamentos);
    return of({ ok: true });
  }

}
