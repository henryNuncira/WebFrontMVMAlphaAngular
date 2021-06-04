import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PersonaContactoService } from 'src/app/services/persona-contacto.service';
import { UsuarioI } from 'src/app/shared/models/usuario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listaUsuario !: UsuarioI[];
 usuario !:UsuarioI;


 constructor(http: HttpClient ,private api:PersonaContactoService,private router:Router) {}

 ngOnInit(): void {
   this.getAllUsuario();
 }


public getAllUsuario(){

 this.api.getAllUsuarios().subscribe(resp =>
   {
     this.listaUsuario= resp;
     console.log(this.listaUsuario);

   },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}
toEditarUsuario(usuario:any):void{
  this.navigationExtras!.state!.value = usuario;
  this.router.navigate(['modificarUsuarios'], this.navigationExtras)
}

  toDeletUsuario (idUsuario :number) : void{
    this.api.Deleteusuario(idUsuario ).subscribe(resp=>{


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
    this.router.navigate(['listadoUsuarios'])
  }
  toNuevoUsuario ():void{
    this.router.navigate(['nuevoUsuarios'])
  }
}

