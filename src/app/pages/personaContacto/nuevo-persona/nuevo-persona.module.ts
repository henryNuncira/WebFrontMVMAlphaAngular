import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoPersonaRoutingModule } from './nuevo-persona-routing.module';
import { NuevoPersonaComponent } from './nuevo-persona.component';
import { PersonaFormModule } from 'src/app/shared/components/persona-form/persona-form.module';


@NgModule({
  declarations: [
    NuevoPersonaComponent
  ],
  imports: [
    CommonModule,
    NuevoPersonaRoutingModule,
    PersonaFormModule
  ]
})
export class NuevoPersonaModule { }
