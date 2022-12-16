import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { dataServices } from './data.services';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosServicioDatosService {
  constructor(
    private alert: ServicioEmpleadosService,
    private dataServices: dataServices
  ) {}
  empleados: Empleado[] = [];
  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados;
  }

  agregarEmpleadoServicio(empleado: Empleado) {
    this.empleados.push(empleado);
    this.alert.muestraMensaje('persona que se va a agregar' + empleado);
    this.dataServices.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataServices.actualizarEmpleado(indice, empleado);
  }
  eliminaEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }

  obtenerEmpleados() {
    return this.dataServices.cargarEmpleados();
  }
}
