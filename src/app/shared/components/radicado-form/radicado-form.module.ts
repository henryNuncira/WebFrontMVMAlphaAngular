import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RadicadoFormComponent } from './radicado-form.component';



@NgModule({
  declarations: [RadicadoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [RadicadoFormComponent]
})
export class RadicadoFormModule { }
