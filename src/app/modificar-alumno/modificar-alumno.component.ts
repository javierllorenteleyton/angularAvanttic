import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno/Alumno';
import { AlumnoService } from '../alumno/alumno.service';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {
  id: number;
  nombre: string;
  private sub: any;
  alumno: Alumno;
  constructor(  private route: ActivatedRoute,
    private router: Router,private alumnoservice: AlumnoService) { }

  ngOnInit() {
   
   console.log("Entra en el modo update" + this.alumnoservice.id);
   this.alumno=this.alumnoservice.getAlumno(this.alumnoservice.id);

  }

   public mod() {
     console.log("Entra en el modo add");
     console.log("Add alumno" + this.alumno.nombre);
     this.alumnoservice.addAlumno(this.alumno);
   }
}