import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Aluno } from 'src/app/types/Aluno';

import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})
export class AlunoEditComponent implements OnInit {
  aluno?: Aluno

  constructor(private alunoService: AlunoService, private route: ActivatedRoute) {
    this.getAluno()
  }

  ngOnInit(): void {
  }

  getAluno(){
    //Pegar id da url (por isso ActivatedRoute)
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.alunoService.getById(id).subscribe((aluno)=> this.aluno = aluno)
  }

}
