import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})
export class EstructuralComponent implements OnInit {

  isError = false

  // hemos visto
  /* sections = [
    'intro',
    'uso Angular',
    'instalacion',
    'CLI',
    'componentes'
  ] */
  sections = [
    { id: 1, name: 'intro', duracion: '10' },
    { id: 2, name: 'uso Angular', duracion: '10' },
    { id: 3, name: 'instalacion', duracion: '10' },
    { id: 4, name: 'CLI', duracion: '10' },

  ]

  constructor() { }

  ngOnInit(): void {
    console.log('iniio')
    /* setTimeout(() => {
      this.isError = true
    }, 4000) */ // en 4seg cambiar a true

    setTimeout(() => {
      this.sections.push({ id: 5, name: 'componentes', duracion: '10' },)
    }, 4000)
  }

  showError() {
    this.isError = true
  }

}
