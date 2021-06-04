import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonaComponent } from './listado-persona.component';

const routes: Routes = [{ path: '', component: ListadoPersonaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoPersonaRoutingModule { }
