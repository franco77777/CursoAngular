import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosServicioDatosService {
  constructor(private alert: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('franco', 'vedia', 'presidente', 7500),
    new Empleado('franco1', 'vedia1', 'presidente1', 7500),
    new Empleado('franco2', 'vedia2', 'presidente2', 7500),
    new Empleado('franco3', 'vedia3', 'presidente3', 7500),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.empleados.push(empleado);
    this.alert.muestraMensaje('persona que se va a agregar');
  }
}
