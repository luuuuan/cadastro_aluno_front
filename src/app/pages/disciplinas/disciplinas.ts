
import { Disciplina } from "../../models/disciplina.model";

export class Disciplinas {
  disciplinas: Disciplina[] = [
  {
    codigo: 101,
    nome: "Algoritmos",
    curso: "ADS",
    professor: { matricula: 1, nome: "Paulo Santos", cpf: "000", dtAdmissao: "2016" }
  },
  {
    codigo: 102,
    nome: "Banco de Dados",
    curso: "ADS",
    professor: { matricula: 1, nome: "Paulo Santos", cpf: "000", dtAdmissao: "2016" }
  }
];
}
