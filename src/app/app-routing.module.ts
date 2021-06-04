import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContAdminComponent } from './shared/components/cont-admin/cont-admin.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [

  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component:DashboardComponent},

  {path: 'login', component:LoginComponent},
  {path: 'contAdmin', component:ContAdminComponent},
   { path: 'listadoUsuarios', loadChildren: () => import('./pages/usuarios/listado-usuarios/listado-usuarios.module').then(m => m.ListadoUsuariosModule) },
   { path: 'nuevoUsuarios', loadChildren: () => import('./pages/usuarios/nuevo-usuarios/nuevo-usuarios.module').then(m => m.NuevoUsuariosModule) },
   { path: 'modificarUsuarios', loadChildren: () => import('./pages/usuarios/modificar-usuarios/modificar-usuarios.module').then(m => m.ModificarUsuariosModule) },
   { path: 'modificarRadicado', loadChildren: () => import('./pages/radicado/modificar-radicado/modificar-radicado.module').then(m => m.ModificarRadicadoModule) },
   { path: 'nuevoRadicado', loadChildren: () => import('./pages/radicado/nuevo-radicado/nuevo-radicado.module').then(m => m.NuevoRadicadoModule) },
   { path: 'listaRadicado', loadChildren: () => import('./pages/radicado/listado-radicado/listado-radicado.module').then(m => m.ListadoRadicadoModule) },
   { path: 'listaPersona', loadChildren: () => import('./pages/personaContacto/listado-persona/listado-persona.module').then(m => m.ListadoPersonaModule) },
   { path: 'nuevoPersona', loadChildren: () => import('./pages/personaContacto/nuevo-persona/nuevo-persona.module').then(m => m.NuevoPersonaModule) },
   { path: 'moodificarPersona', loadChildren: () => import('./pages/personaContacto/modificar-persona/modificar-persona.module').then(m => m.ModificarPersonaModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
