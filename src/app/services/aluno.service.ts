import { Injectable } from "@angular/core";
import { Aluno } from "../models/aluno.model";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
    private alunos: Aluno[] = [];

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }


    getAlunos(): Aluno[]{
        return this.alunos;
    }

}