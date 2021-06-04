import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarUsuariosRoutingModule } from './modificar-usuarios-routing.module';
import { ModificarUsuariosComponent } from './modificar-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioFormModule } from 'src/app/shared/components/usuario-form/usuario-form.module';


@NgModule({
  declarations: [
    ModificarUsuariosComponent
  ],
  imports: [
    CommonModule,
    ModificarUsuariosRoutingModule,
    ReactiveFormsModule,
    UsuarioFormModule
  ]
})
export class ModificarUsuariosModule { }
