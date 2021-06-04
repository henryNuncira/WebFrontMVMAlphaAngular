import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPersonaComponent } from './nuevo-persona.component';

const routes: Routes = [{ path: '', component: NuevoPersonaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoPersonaRoutingModule { }
