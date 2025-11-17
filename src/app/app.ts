import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunoComponent } from '../app/aluno/aluno';

@Component({
  selector: 'app-root',
  imports: [AlunoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cadastro_aluno');
}
