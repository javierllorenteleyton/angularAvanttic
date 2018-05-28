import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component'; // <-- NgModel lives here

import { StudentService }    from '../app/shared/Student.Service';
import { ProductService }    from '../app/shared/Product.Service';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    AddStudentComponentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [StudentService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
