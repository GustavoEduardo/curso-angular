import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operators',
  templateUrl: './pipe-operators.component.html',
  styleUrls: ['./pipe-operators.component.css']
})
export class PipeOperatorsComponent implements OnInit {
  texto = "TEXTO TODO EM MAIÚSCULO"
  data = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
