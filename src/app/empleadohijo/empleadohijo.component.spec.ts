import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadohijoComponent } from './empleadohijo.component';

describe('EmpleadohijoComponent', () => {
  let component: EmpleadohijoComponent;
  let fixture: ComponentFixture<EmpleadohijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadohijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadohijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
