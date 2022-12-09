import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleadohijo',
  templateUrl: './empleadohijo.component.html',
  styleUrls: ['./empleadohijo.component.css'],
})
export class EmpleadohijoComponent {
  @Input() empleadoLista: Empleado; //para pasar variables de padre a hijo
  @Input() indice: number;

  arrayCaracteristicas = [];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
