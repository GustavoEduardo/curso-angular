import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/types/Aluno';

import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  color= 'red'
  underline: string = "underline"
  name = "Gustavo"
  classes = ["negrito",this.underline]
  exibir = false

  //vindo da apli fake "json-server" no documento db.json na raiz
  alunos: Aluno[] = []
  
  constructor( private alunoService: AlunoService) { 
    this.getAlunos()
  }

  ngOnInit(): void {
  }

  removeAluno(id: number, alunos: Aluno[]){    
    this.alunoService.remove(id).subscribe()
    this.alunos = alunos.filter((a)=> a.id !== id)// Animação o ideal seria relistar
  }

  getAlunos(){
    //método subscribe necessário para receber dados da API
    this.alunoService.getAll().subscribe((alunos) => this.alunos = alunos);
  }

}
