import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaContactoService } from 'src/app/services/persona-contacto.service';
import Swal from 'sweetalert2';
import { PersonaContactoI } from '../../models/persona-contacto.interface';


@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  bandera : number =0;

  persona!:PersonaContactoI;

  PersonaForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  estado!: number;


    constructor(private router:Router, private fb:FormBuilder, private api:PersonaContactoService) {
      const navigation= this.router.getCurrentNavigation();
      this.persona = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.persona == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoPersona']);
          }else{
            this.PersonaForm.patchValue(this.persona);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarPersona() : void{
{// si el proveedor no existe creelo

      console.log('Saved', this.PersonaForm);
      console.log(this.PersonaForm.value);
    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewPersona(this.PersonaForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;

            if (this.estado != 200) {
              Swal.fire({

                title: 'persona creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listaPersona']);
            } else {
              Swal.fire({

                title: 'persona no se ha creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

            }

          }
        );
      //}
        } else this.toChange();
    this.PersonaForm.reset();
}

        }

        toChange(): void{
          debugger;

      this.api.PutModifyPersona(this.persona.idPersona,this.PersonaForm.value).subscribe(

        resp=>{

          // this.estado= resp.state;
          // this.message= resp.message;

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu trabajo ha sido guardado',
            showConfirmButton: false,
            timer: 1500
          })


      },error => console.error(error));
      this.router.navigate(['listaPersona']);
    }
    toList() :void{
      this.router.navigate(['listaPersona']);
    }

    private initForm(): void {
      this.PersonaForm = this.fb.group({
        idPersona: ['',[Validators.required]],
        tipoContacto:['',[Validators.required]],
        nit:['',[Validators.required]],
        nombre:['',[Validators.required]],
        telefono:['',[Validators.required, Validators.minLength(10)]],
        correo:['',[Validators.required, Validators.pattern(this.isEmail)]],
        direccion:['',[Validators.required]],

      });
    }

    isValidField(campo:string): boolean{
      const fieldName = this.PersonaForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }


