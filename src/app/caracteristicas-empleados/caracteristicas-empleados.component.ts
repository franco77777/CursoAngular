import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css'],
})
export class CaracteristicasEmpleadosComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>(); // aparentemente es la variable a exportar al padre
  //constructor(private miServicio: ServicioEmpleadosService) {}
  agregaCaracteristicas(value: string) {
    //this.miServicio.muestraMensaje('soy value' + value);
    this.caracteristicasEmpleados.emit(value);
  }
}
