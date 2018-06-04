import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component';
import { ProductComponent } from './product/product.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AgreagarAlumnoComponent } from './agreagar-alumno/agreagar-alumno.component';

export const appRoutes: Routes = [
    {path: '',redirectTo: 'calculadora',pathMatch: 'full'},
    {path: 'calculadora',component: CalculadoraComponent},
    {path: 'add-student', component: AddStudentComponentComponent },
    {path: 'add-product', component: ProductComponent },
    {path: 'alumno', children: [{ path:'',component: AlumnoComponent},
    {path: 'agregar-alumno/:alumno', component: AgreagarAlumnoComponent }] },
    {path: 'agregar-alumno', component: AgreagarAlumnoComponent },

];

export const routing =  RouterModule.forRoot(appRoutes);