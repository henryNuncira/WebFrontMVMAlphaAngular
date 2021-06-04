import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RadicadoCorrespondenciaI } from '../shared/models/radicado-correspondencia.interface';
import { responseI } from '../shared/models/response.inteface';

@Injectable({
  providedIn: 'root'
})
export class RadicadoService {
  url:string = "localhost:5000/api/SourceFile/"


  constructor(private http:HttpClient) {}

  getAllRadicado():Observable<RadicadoCorrespondenciaI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetRadicados";

  return this.http.get<RadicadoCorrespondenciaI[]>(direccion,{headers:header});
}
PostNewRadicado(RadicadoO: RadicadoCorrespondenciaI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNewRadicadod";
    return this.http.post<responseI>(direccion, RadicadoO, {headers:header});
  }

  PutModifyRadicado(idRadicado:number, RadicadoO : RadicadoCorrespondenciaI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutUpdateRadicado/"+ idRadicado;
  return this.http.put<responseI>(direccion, RadicadoO, {headers:header});
  }

}
