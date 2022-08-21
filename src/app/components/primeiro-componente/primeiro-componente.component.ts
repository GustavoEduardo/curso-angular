import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {
  nome: string = "Gustavo"
  user = {
    email: "gustavolima@gmail.com",
    idade: 29
  }

  constructor() { }

  ngOnInit(): void {
  }

}
