import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServicioDatosService } from '../empleados-servicio-datos.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css'],
})
export class ProyectoComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadoService: EmpleadosServicioDatosService
  ) {}
  volverHome() {
    this.router.navigate(['']); //redireccionar rutas
  }

  ngOnInit(): void {
    //this.empleados = this.empleadoService.empleados;
  }
  // empleados: Empleado[] = [];
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
