import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {
  texto: String = 'escribe algo';
  constructor() {
    setTimeout(() => {
      this.texto = 'porfavorsito';
    }, 3000);
  }

  ngOnInit() {}
}
