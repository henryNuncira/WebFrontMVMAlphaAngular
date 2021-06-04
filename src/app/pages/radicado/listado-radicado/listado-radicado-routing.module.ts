import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoRadicadoComponent } from './listado-radicado.component';

const routes: Routes = [{ path: '', component: ListadoRadicadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRadicadoRoutingModule { }
