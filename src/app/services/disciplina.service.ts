import { Injectable } from '@angular/core';
import { Disciplina } from '../models/disciplina.model';

@Injectable({ providedIn: 'root' })
export class DisciplinaService {

  private disciplinas: Disciplina[] = [
    {
      codigo: 1,
      nome: 'Programação Orientada a Objetos',
      curso: 'ADS',
      professor: {
        matricula: 100,
        nome: 'Carlos Silva',
        cpf: '111.111.111-11',
        dtAdmissao: '2020-01-10'
      }
    },
    {
      codigo: 2,
      nome: 'Banco de Dados',
      curso: 'ADS',
      professor: {
        matricula: 200,
        nome: 'Fernanda Souza',
        cpf: '222.222.222-22',
        dtAdmissao: '2019-03-20'
      }
    }
  ];

  listar() {
    return this.disciplinas;
  }

  buscar(codigo: number): Disciplina | undefined {
    return this.disciplinas.find(d => d.codigo === codigo);
  }
}
