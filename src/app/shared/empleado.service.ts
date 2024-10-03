import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpleadoModel } from './empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  BASE_URL='http://127.0.0.1:4000';
  constructor(private http: HttpClient) {
  }

  //Lista completa de empleados
  obtenerEmpleados(){
    return this.http.get<EmpleadoModel[]>(`${this.BASE_URL}/empleados/buscar`);
  }

  //Buscar un Empleado por ID
  obtenerEmpleado(idEmpleado:string){
    return this.http.get<EmpleadoModel>(`${this.BASE_URL}/empleados/buscarId/${idEmpleado}`);
  }

  //Crear un Empleado
  agregarEmpleado(empleado: EmpleadoModel){
    return this.http.post<string>(`${this.BASE_URL}/empleados/crear`,empleado);
  }

  //Actualizar un Empleado
  actualizarEmpleado(empleado: EmpleadoModel){
    return this.http.put<string>(`${this.BASE_URL}/empleados/actualizar/${empleado.id}`,empleado);
  }

  //ELiminar un Empleado
  borrarEmpleado(idEmpleado: string){
    return this.http.delete<string>(`${this.BASE_URL}/empleados/eliminar/${idEmpleado}`);
  }

  
}
