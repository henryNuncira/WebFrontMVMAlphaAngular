import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaFormComponent } from './persona-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PersonaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [PersonaFormComponent]
})
export class PersonaFormModule { }
