import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component';
import { ProductComponent } from './product/product.component';

export const appRoutes: Routes = [
    {path: '',redirectTo: 'calculadora',pathMatch: 'full'},
    {path: 'calculadora',component: CalculadoraComponent},
    {path: 'add-student', component: AddStudentComponentComponent },
    {path: 'add-product', component: ProductComponent }
];

export const routes: ModuleWithProviders =  RouterModule.forRoot(appRoutes);