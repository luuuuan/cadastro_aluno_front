import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lancamento } from '../../models/lancamento.model';
import { Disciplina } from '../../models/disciplina.model';
import { Aluno } from '../../models/aluno.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lancamento',
  imports: [CommonModule, FormsModule],
  templateUrl: './lancamento.html',
  styleUrls: ['./lancamento.css']
})
export class LancamentoComponent implements OnInit {

  disciplina!: Disciplina;
  alunos: Aluno[] = [];
  lancamentos: Lancamento[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const codigo = Number(this.route.snapshot.paramMap.get("codigoDisciplina"));

    // TODO: trocar por chamada ao backend
    this.disciplina = {
      codigo,
      nome: "Algoritmos",
      curso: "ADS",
      professor: { matricula: 1, nome: "João", cpf: "123", dtAdmissao: "2020" }
    };

    // TODO: substituir pelos alunos da disciplina (backend)
    this.alunos = [
      { ra: "1", nome: "Maria", dtNascimento: "2000-01-01", curso: "ADS", cep: "85900000", logradouro: "Rua teste", municipio: "cidade", bairro: "bairro", uf: "PR" },
      { ra: "2", nome: "Pedro", dtNascimento: "2001-04-22", curso: "ADS", cep: "85908340", logradouro: "teste", municipio: "city", bairro: "city", uf: "SP" },
    ];

    this.lancamentos = this.alunos.map(a => ({
      aluno: a,
      disciplina: this.disciplina,
      notas: { bimestre1: 0, bimestre2: 0 },
      faltas: { bimestre1: [], bimestre2: [] }
    }));
  }

  calcularMedia(l: Lancamento): number {
    return (l.notas.bimestre1 + l.notas.bimestre2) / 2;
  }

  salvar() {
    console.log("Enviar ao backend:", this.lancamentos);
    alert("Lançamentos salvos!");
  }
}
