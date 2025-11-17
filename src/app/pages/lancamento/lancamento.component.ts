import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';
import { DisciplinaService } from '../../services/disciplina.service';
import { LancamentoService } from '../../services/lancamento.service';

@Component({
  selector: 'app-lancamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent {
  mensagem: string = '';
  disciplina: any;
  alunos: any = [];
  lancamentos: any = [];

  constructor(
    private route: ActivatedRoute,
    private as: AlunoService,
    private ds: DisciplinaService,
    private ls: LancamentoService
  ) {

    const codigo = Number(this.route.snapshot.paramMap.get('codigo'));

    this.disciplina = this.ds.buscar(codigo);
    this.alunos = this.as.listarAlunosPorDisciplina(codigo);

    this.lancamentos = this.alunos.map((a: any) => ({
      aluno: a,
      disciplina: this.disciplina,
      notas: { bimestre1: 0, bimestre2: 0 },
      faltas: {
        bimestre1: Array.from({ length: 5 }, (_, i) => ({ dia: i + 1, falta: false })),
        bimestre2: Array.from({ length: 5 }, (_, i) => ({ dia: i + 1, falta: false }))
      }
    }));
  }

  media(l: any) {
    return (l.notas.bimestre1 + l.notas.bimestre2) / 2;
  }

  salvar() {
  this.ls.salvar(this.lancamentos).subscribe(() => {
      this.mensagem = 'Lançamentos salvos com sucesso!';
    
  });
  }

}
