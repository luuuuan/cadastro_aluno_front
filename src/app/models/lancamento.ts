import { Aluno } from '../models/aluno.model';
import { Disciplina } from "./disciplina";

export interface Falta {
  dia: number;
  falta: boolean;
}

export interface Lancamento {
  aluno: Aluno;
  disciplina: Disciplina;

  notas: {
    bimestre1: number;
    bimestre2: number;
  };

  faltas: {
    bimestre1: Falta[];
    bimestre2: Falta[];
  };
}
