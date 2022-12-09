import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServicioDatosService } from '../empleados-servicio-datos.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  titulo = 'miprimeraapp';
  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadoService: EmpleadosServicioDatosService //this.empleados = this.empleadoService.empleados;
  ) {} //aqui importamos el servicio global, aparentemente no es variable
  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }
  empleados: Empleado[] = [];

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.miServicio.muestraMensaje('este es el nuevo:' + miEmpleado.nombre);
    this.empleadoService.agregarEmpleadoServicio(miEmpleado);
  }
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
