import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PersonaContactoService } from 'src/app/services/persona-contacto.service';
import { PersonaContactoI } from 'src/app/shared/models/persona-contacto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listaPersona !: PersonaContactoI[];
 persona !:PersonaContactoI;


 constructor(http: HttpClient ,private api:PersonaContactoService,private router:Router) {}

 ngOnInit(): void {
   this.getAllPersona();
 }


public getAllPersona(){

 this.api.getAllPersonas().subscribe(resp =>
   {
     this.listaPersona= resp;
     console.log(this.listaPersona);

   },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}
toEditarPersona(Persona:any):void{
  this.navigationExtras!.state!.value = Persona;
  this.router.navigate(['moodificarPersona'], this.navigationExtras)
}

  toDeletePersona (idPersona :number) : void{
    this.api.DeletePersona(idPersona ).subscribe(resp=>{


      this.ngOnInit();

      Swal.fire({
        title: '¿Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire(
            'Borrado!',
            'Tu archivo ha sido eliminado.',
            'success'
          )
        }
      })
    },error => console.error(error));

  }

  toList():void{
    this.router.navigate(['listaPersona'])
  }
  toNuevoRadicado ():void{
    this.router.navigate(['nuevoPersona'])
  }
}
