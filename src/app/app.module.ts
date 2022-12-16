import { HttpClientModule } from '@angular/common/http';
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
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { dataServices } from './data.services';

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
  {
    path: 'actualiza/:id',
    component: ActualizaComponentComponent,
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
    ActualizaComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // se importan las rutas creadas
    HttpClientModule, //se importa para que funciones firebase
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadosServicioDatosService,
    dataServices, //la clase para firebase
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
