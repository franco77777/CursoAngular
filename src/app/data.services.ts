import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable() // esto sirve para injectar el servicio en el constructor
export class dataServices {
  constructor(private httpClient: HttpClient) {}

  guardarEmpleados(empleados: Empleado[]) {
    this.httpClient
      .put(
        'https://misclientes-28803-default-rtdb.firebaseio.com/datos.json',
        empleados
      )
      .subscribe(
        (response) => console.log('se han guardado los empleados', response),
        (error) => console.log('error' + error)
      );
  }

  cargarEmpleados() {
    return this.httpClient.get(
      'https://misclientes-28803-default-rtdb.firebaseio.com/datos.json'
    );
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let url =
      'https://misclientes-28803-default-rtdb.firebaseio.com/datos' +
      indice +
      '.json';

    this.httpClient.put(url, empleado).subscribe(
      (response) => console.log('se han modificado', response),
      (error) => console.log('error' + error)
    );
  }
}
