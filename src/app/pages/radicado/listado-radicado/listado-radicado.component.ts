import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RadicadoService } from 'src/app/services/radicado.service';
import { RadicadoCorrespondenciaI } from 'src/app/shared/models/radicado-correspondencia.interface';

@Component({
  selector: 'app-listado-radicado',
  templateUrl: './listado-radicado.component.html',
  styleUrls: ['./listado-radicado.component.css']
})
export class ListadoRadicadoComponent implements OnInit {


  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listaRadicado !: RadicadoCorrespondenciaI[];
 radicado !:RadicadoCorrespondenciaI;


 constructor(http: HttpClient ,private api:RadicadoService,private router:Router) {}

 ngOnInit(): void {
   this.getAllRadicados();
 }


public getAllRadicados(){

 this.api.getAllRadicado().subscribe(resp =>
   {
     this.listaRadicado= resp;
     console.log(this.listaRadicado);

   },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}
toEditarRadicado(radicado:any):void{
  this.navigationExtras!.state!.value = radicado;
  this.router.navigate(['modificarRadicado'], this.navigationExtras)
}



  toList():void{
    this.router.navigate(['listaRadicado'])
  }
  toNuevoRadicado ():void{
    this.router.navigate(['nuevoRadicado'])
  }
}
