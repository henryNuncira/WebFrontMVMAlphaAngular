import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './shared/components/login/login.module';
import { LoginComponent } from './shared/components/login/login.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { UsuarioFormModule } from './shared/components/usuario-form/usuario-form.module';
import { RadicadoFormModule } from './shared/components/radicado-form/radicado-form.module';
import { PersonaFormModule } from './shared/components/persona-form/persona-form.module';
import { DashboardModule } from './shared/components/dashboard/dashboard.module';
import { ContAdminComponent } from './shared/components/cont-admin/cont-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContAdminComponent

  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    UsuarioFormModule,
    RadicadoFormModule,
    PersonaFormModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
