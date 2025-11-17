import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private storageKey = 'lancamentos';

  salvar(lancamentos: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(lancamentos));
    return of(true);
  }

  carregar() {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }
}
