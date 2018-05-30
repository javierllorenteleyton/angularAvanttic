import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno/Alumno';

@Component({
  selector: 'app-agreagar-alumno',
  templateUrl: './agreagar-alumno.component.html',
  styleUrls: ['./agreagar-alumno.component.css']
})
export class AgreagarAlumnoComponent implements OnInit {

  alumno= new Alumno("","","");
  constructor() { }

  ngOnInit() {
  }

   public add() {
     console.log("Entra en el modo add");
   }
}
