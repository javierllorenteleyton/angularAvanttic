import { Injectable } from '@angular/core';
import { Alumno } from './Alumno';

@Injectable()
export class AlumnoService {
   
     private listAlumnos: Array<Alumno>;

     constructor() {}

     public getAlumnosList(): Array<Alumno> {
         return this.mockAlumnos();
     }

     private mockAlumnos() : Array<Alumno> {
         this.listAlumnos = [
            new Alumno('Simon','I','111111'), 
            new Alumno('Simon','II','111112'),
            new Alumno('Simon','III','111113'),
            new Alumno('Juan','I','111114'),
            new Alumno('Mateo','I','111115'),
            new Alumno('Carlos','I','111116'),
            new Alumno('Pedro','I','111117'),
            new Alumno('Santiago','II','111118'),  
            new Alumno('Pedro','II','111119'),
            new Alumno('Santiago','V','111120')                
         ];
         return this.listAlumnos;
     }
     addAlumno(alumno:Alumno){
        this.listAlumnos = [...this.listAlumnos, alumno];
    }

}