import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BusComponent } from './components/bus/bus.component';

const routes :Routes =[
  {path:'inicio', component:InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'buscar/:texto', component: BusComponent},
  {path:'****',pathMatch:'full' , redirectTo:'/inicio'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports:[
    RouterModule
  ]
})
export class AppRouting2Module { }
