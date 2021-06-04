import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRadicadoRoutingModule } from './listado-radicado-routing.module';
import { ListadoRadicadoComponent } from './listado-radicado.component';


@NgModule({
  declarations: [
    ListadoRadicadoComponent
  ],
  imports: [
    CommonModule,
    ListadoRadicadoRoutingModule
  ]
})
export class ListadoRadicadoModule { }
