import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from '../shared/empleado.model';
import { EmpleadoService } from '../shared/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrl: './editar-empleados.component.css'
})
export class EditarEmpleadosComponent implements OnInit {

  idEmpleado = '';
  empleado = new EmpleadoModel(
    '',
    '',
    '',
    '',
    '',
    ''
  );

  constructor(private empleadoService: EmpleadoService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.idEmpleado = this.route.snapshot.params['idEmpleado'];
    console.log(`El idEmpleado es ${this.idEmpleado}`);

    if (this.idEmpleado) {
      //Viene de Editar
      console.log('La solicitud viene de Editar');
      this.empleadoService.obtenerEmpleado(this.idEmpleado).subscribe({
        next: data => {
          console.log(data);
          this.empleado = data;
          console.log(this.empleado);
        },
        error: err => {
          console.log(`Error ${err}`);
        }

      });

    }
    else {
      console.log('El empleado viene de Nuevo empleado');
    }

  }

  onSubmit() {
    console.log("On Submit");
    //Viene de Editar
    if (this.empleado.id) {
      this.empleadoService.actualizarEmpleado(this.empleado).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/empleados']);

        },
        error: err => {
          console.log(`Error al actualizar ${err}`);
        }
      });
    }
    else {
      //Viene de Nueva empleado
      this.empleadoService.agregarEmpleado(this.empleado).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/empleados']);
        },
        error: err => {
          console.log(`Error al Agregar ${err}`);
        }
      });
    }

  }
}
