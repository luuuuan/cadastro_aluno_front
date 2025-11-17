import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Disciplina } from '../models/disciplina.model';

@Component({
  selector: 'app-disciplina',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './disciplina.html',
  styleUrls: ['./disciplina.css']
})
export class DisciplinaComponent {

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
