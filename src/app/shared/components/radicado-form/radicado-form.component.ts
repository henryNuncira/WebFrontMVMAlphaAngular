import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RadicadoService } from 'src/app/services/radicado.service';
import Swal from 'sweetalert2';
import { RadicadoCorrespondenciaI } from '../../models/radicado-correspondencia.interface';

@Component({
  selector: 'app-radicado-form',
  templateUrl: './radicado-form.component.html',
  styleUrls: ['./radicado-form.component.css']
})
export class RadicadoFormComponent implements OnInit {


  bandera : number =0;

  radicado!: RadicadoCorrespondenciaI;

  radicadoForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  estado!: number;


    constructor(private router:Router, private fb:FormBuilder, private api:RadicadoService) {
      const navigation= this.router.getCurrentNavigation();
      this.radicado = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.radicado == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoRadicado']);
          }else{
            this.radicadoForm.patchValue(this.radicado);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarradicado() : void{
{// si el proveedor no existe creelo

      console.log('Saved', this.radicadoForm);
      console.log(this.radicadoForm.value);
    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewRadicado(this.radicadoForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'radicado creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listaRadicado']);
            } else {
              Swal.fire({

                title: 'radicado no se ha creado correctamente',
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
    this.radicadoForm.reset();
}

        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyRadicado(this.radicado.idRadicado,this.radicadoForm.value).subscribe(
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
      this.router.navigate(['listaRadicado']);
    }
    toList() :void{
      this.router.navigate(['listaRadicado']);
    }

    private initForm(): void {
      this.radicadoForm = this.fb.group({
        idRadicado: ['',[Validators.required]],

        nombre:['',[Validators.required]],
        fecha:['',[Validators.required]],
        estado:['',[Validators.required]],

      });
    }
    isValidField(campo:string): boolean{
      const fieldName = this.radicadoForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }

