import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RadicadoCorrespondenciaI } from '../shared/models/radicado-correspondencia.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string = "http://localhost:5000/api/Consulta/"


  constructor(private http:HttpClient) {}

  getNitConsulta(nit:string):Observable<RadicadoCorrespondenciaI[]>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "GetNitRadicado";

    return this.http.get<RadicadoCorrespondenciaI[]>(direccion,{headers:header});

  }

}
