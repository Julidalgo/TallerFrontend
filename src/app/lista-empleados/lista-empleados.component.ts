import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoModel } from '../shared/empleado.model';
import { EmpleadoService } from '../shared/empleado.service';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Observable<EmpleadoModel[]> | undefined;
  searchText: string = ''; // Agrega esta propiedad
  constructor(private empleadoService: EmpleadoService) { }
  ngOnInit() {
    this.empleados = this.empleadoService.obtenerEmpleados();
  }

  borrarEmpleado(idEmpleado: string) {
    this.empleadoService.borrarEmpleado(idEmpleado).subscribe({
      next: data => {
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err => {
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}

