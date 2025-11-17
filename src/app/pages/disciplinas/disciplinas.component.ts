import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DisciplinaService } from '../../services/disciplina.service';
import { Disciplina } from '../../models/disciplina.model';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent {

  disciplinas: Disciplina[] = [];

  constructor(private ds: DisciplinaService, private router: Router) {
    this.disciplinas = this.ds.listar();
  }

  abrirLancamento(codigo: number) {
    this.router.navigate(['/lancamento', codigo]);
  }
}
