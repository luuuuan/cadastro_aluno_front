import { Routes } from '@angular/router';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { LancamentoComponent } from './pages/lancamento/lancamento.component';

export const appRoutes: Routes = [
  { path: '', component: DisciplinasComponent },
  { path: 'lancamento/:codigo', component: LancamentoComponent },
];
