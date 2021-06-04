import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaContactoI } from '../shared/models/persona-contacto.interface';
import { responseI } from '../shared/models/response.inteface';
import { UsuarioI } from '../shared/models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaContactoService {

  url:string = "http://localhost:5000/api/Home/"


  constructor(private http:HttpClient) {}


  getAllUsuarios():Observable<UsuarioI[]>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "GetUsuarios";

    return this.http.get<UsuarioI[]>(direccion,{headers:header});

  }
  PostNewUsuario(usuario: UsuarioI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoUsuario";
    return this.http.post<responseI>(direccion, usuario, {headers:header});
  }


PutModifyUsuario(idUsuario:number, usuario : UsuarioI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutUsuario/"+ idUsuario;
  return this.http.put<responseI>(direccion, usuario, {headers:header});
}

Deleteusuario(idUsuario:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "Deleteusuario/"+ idUsuario;
  return this.http.delete<responseI>(direccion,{headers:header});

}
//------------------------*************************---------------


  loginByUsuario(form:UsuarioI[]):Observable<responseI>{

    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostLogin";

    return this.http.post<responseI>(direccion,form,{headers:header});
  }
  //----------------------*******___________--------
  getAllPersonas():Observable<PersonaContactoI[]>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "GetPersonaContacto";

    return this.http.get<PersonaContactoI[]>(direccion,{headers:header});

  }
  PostNewPersona(persona: PersonaContactoI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoPersona";
    return this.http.post<responseI>(direccion, persona, {headers:header});
  }

PutModifyPersona(idPersona:number, persona : PersonaContactoI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutContactoPersona/"+ idPersona;
  return this.http.put<responseI>(direccion, persona, {headers:header});
}

DeletePersona(idPersona:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeletePersona/"+ idPersona;
  return this.http.delete<responseI>(direccion,{headers:header});

}
}
