import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaContactoService } from 'src/app/services/persona-contacto.service';
import Swal from 'sweetalert2';
import { UsuarioI } from '../../models/usuario.interface';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  bandera : number =0;

  usuario!:UsuarioI;

  UsuarioForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  estado!: number;


    constructor(private router:Router, private fb:FormBuilder, private api:PersonaContactoService) {
      const navigation= this.router.getCurrentNavigation();
      this.usuario = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.usuario == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoUsuarios']);
          }else{
            this.UsuarioForm.patchValue(this.usuario);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarUsuario() : void{


      console.log('Saved', this.UsuarioForm);
      console.log(this.UsuarioForm.value);
    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewUsuario(this.UsuarioForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'Usuario creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoUsuarioes']);
            } else {
              Swal.fire({

                title: 'Usuario no se ha creado correctamente',
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
    this.UsuarioForm.reset();


        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyUsuario(this.usuario.idUsuario,this.UsuarioForm.value).subscribe(
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
      this.router.navigate(['listadoUsuarios']);
    }
    toList() :void{
      this.router.navigate(['listadoUsuarios']);
    }

    private initForm(): void {
      this.UsuarioForm = this.fb.group({
        idUsuario: ['',[Validators.required]],
        dni:['',[Validators.required]],
        nombre:['',[Validators.required]],
        telefono:['',[Validators.required, Validators.minLength(10)]],
        email:['',[Validators.required, Validators.pattern(this.isEmail)]],
        direccion:['',[Validators.required]],

      });
    }

    isValidField(campo:string): boolean{
      const fieldName = this.UsuarioForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }

