import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno/Alumno';
import { AlumnoService } from '../alumno/alumno.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-agreagar-alumno',
  templateUrl: './agreagar-alumno.component.html',
  styleUrls: ['./agreagar-alumno.component.css']
})
export class AgreagarAlumnoComponent implements OnInit {
  id: number;
  nombre: string;
  alumno= new Alumno("","","");
  constructor( private alumnoservice: AlumnoService) { }

  ngOnInit() {
   
   console.log("Entra en el modo update" + this.alumnoservice.id);
   this.alumno=this.alumnoservice.getAlumno(this.alumnoservice.id);

  }

   public add() {
     console.log("Entra en el modo add");
     console.log("Add alumno" + this.alumno.nombre);
     this.alumnoservice.addAlumno(this.alumno);
   }
}
