import { Component, OnInit } from '@angular/core';

import { Alumno } from './Alumno';
import { AlumnoService } from './alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [AlumnoService]
})
export class AlumnoComponent implements OnInit {

  public listAlumnos: Array<Alumno>;

  constructor(private alumnoservice: AlumnoService) { }

  ngOnInit() {
     this.refreshAlumnos();
  }

  private refreshAlumnos() {
    this.listAlumnos= this.alumnoservice.getAlumnosList();
  }

}
