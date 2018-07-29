import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {
  texto: String = 'Hello universe';
  constructor() {}
  ngOnInit() {}
  modTexto() {
    return (this.texto = 'Hello Earth');
  }
}
