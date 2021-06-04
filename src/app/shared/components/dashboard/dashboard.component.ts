import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/consulta.service';
import Swal from 'sweetalert2';
import { PersonaContactoI } from '../../models/persona-contacto.interface';
import { RadicadoCorrespondenciaI } from '../../models/radicado-correspondencia.interface';
import { responseI } from '../../models/response.inteface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaRadicado !: RadicadoCorrespondenciaI[];
  bandera : number =0;
  consultaForm !: FormGroup;
  consulta!:PersonaContactoI;
  constructor(private api:UsuarioService, private router:Router,private fb:FormBuilder) {
    const navigation= this.router.getCurrentNavigation();
    this.consulta = navigation?.extras?.state?.value;

    this.initForm();
  }
  private initForm(): void {
    this.consultaForm = this.fb.group({
      nit:['',[Validators.required]],
    });
  }
  isValidField(campo:string): boolean{
    const fieldName = this.consultaForm.get(campo);
    return fieldName!.invalid && fieldName!.touched;
  }

  ngOnInit(): void {}
  onConsulta(): void{
    debugger;
    this.api.getNitConsulta(this.consulta.nit).subscribe(data =>{

     console.log(data);
     this.bandera=1;
     this.listaRadicado= data;
     console.log(this.listaRadicado);


    });

  }
}
