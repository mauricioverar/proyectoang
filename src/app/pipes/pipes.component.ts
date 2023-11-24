import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  // name = 'mao'.toUpperCase()
  name = 'mao'
  date = '2020-02-20T13:59:31.238Z' // timestamp
  // al cortar con split queda mal porque en otras zonas tienen un digito mas, perdiendo un dia

  estado = 0

  constructor() { }

  ngOnInit(): void {
  }

  changeState() {
    this.estado = 1
  }

  /* getTextState() {
    console.log('func ejecutando')
    const text = this.estado === 0 ? 'PENDIENTE' : 'REGISTRADO'
    return text
  } */

}
