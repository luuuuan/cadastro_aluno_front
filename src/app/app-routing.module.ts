import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LancamentoComponent } from '../pages/lancamento/lancamento';
import { Disciplinas } from '../pages/disciplinas/disciplinas';

const routes: Routes = [
  { path: '', component: DisciplinaComponent },
  { path: 'lancamentos', component: LancamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
