import { TestBed } from '@angular/core/testing';

import { EmpleadosServicioDatosService } from './empleados-servicio-datos.service';

describe('EmpleadosServicioDatosService', () => {
  let service: EmpleadosServicioDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosServicioDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
