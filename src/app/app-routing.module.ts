import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaAdoptantesComponent } from './lista-adoptantes/lista-adoptantes.component';
import { EditarAdoptantesComponent } from './editar-adoptantes/editar-adoptantes.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { EditarEmpleadosComponent } from './editar-empleados/editar-empleados.component';

const routes: Routes = [

  {path: 'inicio', component: InicioComponent},

 {path: 'mascotas', component: ListaMascotasComponent},
 {path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent},
 {path: 'mascotas/agregar',component: EditarMascotasComponent},

 {path: 'adoptantes', component: ListaAdoptantesComponent},
 {path: 'adoptantes/editar/:idAdoptante', component: EditarAdoptantesComponent},
 {path: 'adoptantes/agregar',component: EditarAdoptantesComponent},

 {path: 'solicitudes', component: ListaSolicitudesComponent},
 {path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent},
 {path: 'solicitudes/agregar',component: EditarSolicitudesComponent},

 {path: 'empleados', component: ListaEmpleadosComponent},
 {path: 'empleados/editar/:idEmpleado', component: EditarEmpleadosComponent},
 {path: 'empleados/agregar',component: EditarEmpleadosComponent},

 {path: '**',redirectTo: '/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
