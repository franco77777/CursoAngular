import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadohijoComponent } from './empleadohijo/empleadohijo.component';
import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados/caracteristicas-empleados.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosServicioDatosService } from './empleados-servicio-datos.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectoComponentComponent } from './proyecto-component/proyecto-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },
  {
    path: 'proyectos',
    component: ProyectoComponentComponent,
  },
  {
    path: 'quienes',
    component: QuienesComponentComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponentComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    EmpleadohijoComponent,
    CaracteristicasEmpleadosComponent,
    HomeComponentComponent,
    ProyectoComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServicioEmpleadosService, EmpleadosServicioDatosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
