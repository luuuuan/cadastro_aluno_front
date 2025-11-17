import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';
import { ViaCepService } from '../services/viacep.service';
import { ViaCep } from '../models/viacep.model';



@Component({
  selector: 'app-aluno',
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})
export class AlunoComponent {
  novoAluno: Aluno = {
    ra: '',
    nome: '',
    dtNascimento: '',
    curso: '',
    cep: '',
    logradouro: '',
    municipio: '',
    bairro: '',
    uf: ''
  };

  listaAlunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, 
    private viaCepService: ViaCepService) {
    this.listaAlunos = this.alunoService.getAlunos();
  }

  adicionarAluno(){
    this.alunoService.adicionarAluno({...this.novoAluno});
    this.novoAluno = {
      ra: '',
      nome: '',
      dtNascimento: '',
      curso: '',
      cep: '',
      logradouro: '',
      municipio: '',
      bairro: '',
      uf: ''
    };
  }

  buscarCep():void{
    if(this.novoAluno.cep){
      this.viaCepService.getEndereco(this.novoAluno.cep).subscribe((endereco: ViaCep) => {
        if(endereco){
          this.novoAluno.logradouro = endereco.logradouro;
          this.novoAluno.bairro = endereco.bairro;
          this.novoAluno.municipio = endereco.localidade;
          this.novoAluno.uf = endereco.uf;
        }
      })
    }
  }
}
