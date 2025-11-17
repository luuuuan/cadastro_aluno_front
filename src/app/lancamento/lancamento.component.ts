import { Component } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { Disciplina } from '../models/disciplina.model';
import { Lancamento } from '../models/lancamento.model';
import { LancamentoService } from '../services/lancamento.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent {

  disciplinas: Disciplina[] = [];
  alunos: Aluno[] = [];

  disciplinaSelecionada: Disciplina | null = null;

  lancamentos: Lancamento[] = [];

  diasMes = Array.from({ length: 30 }, (_, i) => i + 1);

  constructor(private lancService: LancamentoService) {}

  ngOnInit() {
    this.disciplinas = [
      {
        codigo: 1,
        nome: "Programação Web",
        curso: "ADS",
        professor: {
          matricula: 100,
          nome: "Paulo Santos",
          cpf: "00000000000",
          dtAdmissao: "2019-02-10"
        }
      }
    ];

    this.alunos = [
      { ra: '1', nome: "Luan", dtNascimento: "2004-01-01", curso: "ADS" },
      { ra: '2', nome: "Amanda", dtNascimento: "2003-04-11", curso: "ADS" },
      { ra: '3', nome: "Carlos", dtNascimento: "2003-06-20", curso: "ADS" }
    ];
  }

  onDisciplinaChange(event: Event) {
  const select = event.target as HTMLSelectElement;
  const index = select.selectedIndex - 1;

    if (index >= 0) {
      this.selecionarDisciplina(this.disciplinas[index]);
    }
  }

  selecionarDisciplina(d: Disciplina) {
    this.disciplinaSelecionada = d;

    this.lancamentos = this.alunos.map(a => ({
      aluno: a,
      disciplina: d,
      notas: {
        bimestre1: 0,
        bimestre2: 0
      },
      faltas: {
        bimestre1: this.diasMes.map(dia => ({ dia, falta: false })),
        bimestre2: this.diasMes.map(dia => ({ dia, falta: false }))
      },
      showFaltas: false
    }));

  }

  contarFaltas(lanc: Lancamento, bim: number): number {
    return lanc.faltas[bim === 1 ? 'bimestre1' : 'bimestre2']
      .filter(f => f.falta)
      .length;
  }

  mediaFinal(lanc: Lancamento): number {
    return (lanc.notas.bimestre1 + lanc.notas.bimestre2) / 2;
  }

  salvar() {
    this.lancService.salvarLancamentos(this.lancamentos)
      .subscribe(() => alert("Lançamentos salvos com sucesso!"));
  }
}
