import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent implements OnInit {

  @Input() name = ""
  @Input() user!: {email: string, idade: number}

  constructor() { }

  ngOnInit(): void {
  }

}
