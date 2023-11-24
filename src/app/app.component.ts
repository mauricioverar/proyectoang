import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyectoang';

  constructor() {
    localStorage.setItem('id', '1234'); // id falso del user, acceso permitido
    // localStorage.setItem('id', '9999'); // id falso del user, acceso negado
  }
}
