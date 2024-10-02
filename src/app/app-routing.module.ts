import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaAdoptantesComponent } from './lista-adoptantes/lista-adoptantes.component';
import { EditarAdoptantesComponent } from './editar-adoptantes/editar-adoptantes.component';

const routes: Routes = [

  {path: 'inicio', component: InicioComponent},

 {path: 'mascotas', component: ListaMascotasComponent},
 {path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent},
 {path: 'mascotas/agregar',component: EditarMascotasComponent},

 {path: 'adoptantes', component: ListaAdoptantesComponent},
 {path: 'adoptantes/editar/:idAdoptante', component: EditarAdoptantesComponent},
 {path: 'adoptantes/agregar',component: EditarAdoptantesComponent},

 {path: '**',redirectTo: '/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
