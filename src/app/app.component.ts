import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Nome do usuário no componente pai"
  user = {
    email: "gustavolima@gmail.com",
    idade: 29
  }
  title = 'teoria';
}
