import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarUsuariosComponent } from './modificar-usuarios.component';

const routes: Routes = [{ path: '', component: ModificarUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarUsuariosRoutingModule { }
