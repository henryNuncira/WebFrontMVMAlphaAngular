import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoPersonaRoutingModule } from './listado-persona-routing.module';
import { ListadoPersonaComponent } from './listado-persona.component';


@NgModule({
  declarations: [
    ListadoPersonaComponent
  ],
  imports: [
    CommonModule,
    ListadoPersonaRoutingModule
  ]
})
export class ListadoPersonaModule { }
