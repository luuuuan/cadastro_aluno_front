import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Injectable({ providedIn: 'root' })
export class AlunoService {

  private alunosMock: Aluno[] = [
    { ra: '1', nome: 'João Pedro', dtNascimento: '2000-01-10', curso: 'ADS' },
    { ra: '2', nome: 'Maria Fernanda', dtNascimento: '2001-03-22', curso: 'ADS' },
    { ra: '3', nome: 'Ana Luiza', dtNascimento: '2000-11-05', curso: 'ADS' }
  ];

  listarAlunosPorDisciplina(codigo: number) {
    return this.alunosMock;
  }
}
