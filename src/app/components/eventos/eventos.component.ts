import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  exibir = true
  constructor() { }

  ngOnInit(): void {
  }

  show(): void{
    this.exibir = !this.exibir
  }

}
