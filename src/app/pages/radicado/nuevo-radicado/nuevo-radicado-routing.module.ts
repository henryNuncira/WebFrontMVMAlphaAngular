import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoRadicadoComponent } from './nuevo-radicado.component';

const routes: Routes = [{ path: '', component: NuevoRadicadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoRadicadoRoutingModule { }
