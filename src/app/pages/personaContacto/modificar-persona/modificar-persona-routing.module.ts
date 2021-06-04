import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarPersonaComponent } from './modificar-persona.component';

const routes: Routes = [{ path: '', component: ModificarPersonaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarPersonaRoutingModule { }
