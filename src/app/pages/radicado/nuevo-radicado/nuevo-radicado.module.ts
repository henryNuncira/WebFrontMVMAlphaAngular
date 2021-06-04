import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevoRadicadoRoutingModule } from './nuevo-radicado-routing.module';
import { NuevoRadicadoComponent } from './nuevo-radicado.component';
import { RadicadoFormModule } from 'src/app/shared/components/radicado-form/radicado-form.module';


@NgModule({
  declarations: [
    NuevoRadicadoComponent
  ],
  imports: [
    CommonModule,
    NuevoRadicadoRoutingModule,
    ReactiveFormsModule,
    RadicadoFormModule

  ]
})
export class NuevoRadicadoModule { }
