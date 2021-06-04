import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarRadicadoRoutingModule } from './modificar-radicado-routing.module';
import { ModificarRadicadoComponent } from './modificar-radicado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadicadoFormModule } from 'src/app/shared/components/radicado-form/radicado-form.module';


@NgModule({
  declarations: [
    ModificarRadicadoComponent
  ],
  imports: [
    CommonModule,
    ModificarRadicadoRoutingModule,
    ReactiveFormsModule,
    RadicadoFormModule
  ]
})
export class ModificarRadicadoModule { }
