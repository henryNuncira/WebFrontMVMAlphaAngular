import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarPersonaRoutingModule } from './modificar-persona-routing.module';
import { ModificarPersonaComponent } from './modificar-persona.component';
import { PersonaFormModule } from 'src/app/shared/components/persona-form/persona-form.module';


@NgModule({
  declarations: [
    ModificarPersonaComponent
  ],
  imports: [
    CommonModule,
    ModificarPersonaRoutingModule,
    PersonaFormModule
  ]
})
export class ModificarPersonaModule { }
