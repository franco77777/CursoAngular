import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServicioDatosService } from '../empleados-servicio-datos.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private miServicio: ServicioEmpleadosService,
    private empleadoService: EmpleadosServicioDatosService
  ) {
    this.indice = route.snapshot.params['id'];

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    let empleado: Empleado = this.empleadoService.encontrarEmpleado(
      this.indice
    );
    (this.cuadroNombre = empleado.nombre),
      (this.cuadroApellido = empleado.apellido),
      (this.cuadroCargo = empleado.cargo),
      (this.cuadroSalario = empleado.salario);
  }

  accion: number;

  volverHome() {
    this.router.navigate(['']); //redireccionar rutas
  }

  actualizaEmpleado() {
    if (this.accion == 1) {
      let miEmpleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );
      //this.miServicio.muestraMensaje('este es el nuevo:' + miEmpleado.nombre);
      this.empleadoService.actualizarEmpleado(this.indice, miEmpleado);
      this.volverHome();
    } else {
      this.empleadoService.eliminaEmpleado(this.indice);
      this.volverHome();
    }
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  indice: number;
}
