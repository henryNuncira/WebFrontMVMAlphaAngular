import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarRadicadoComponent } from './modificar-radicado.component';

const routes: Routes = [{ path: '', component: ModificarRadicadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarRadicadoRoutingModule { }
