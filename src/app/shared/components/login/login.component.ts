import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/consulta.service';
import { PersonaContactoService } from 'src/app/services/persona-contacto.service';
import Swal from 'sweetalert2';
import { loginI } from '../../models/login.interface';
import { responseI } from '../../models/response.inteface';
import { UsuarioI } from '../../models/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorState: boolean= false;
  errorMessage: any ="";
  loginForm !: FormGroup;
  usuario : loginI;
  constructor(private api:PersonaContactoService, private router:Router, private fb:FormBuilder) {
    const navigation= this.router.getCurrentNavigation();
    this.usuario = navigation?.extras?.state?.value;

    this.initForm();
  }



  private initForm(): void {
    this.loginForm = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(5)]],
      clave:['',[Validators.required, Validators.minLength(5)]],
    });
  }

  isValidField(campo:string): boolean{
    const fieldName = this.loginForm.get(campo);
    return fieldName!.invalid && fieldName!.touched;
  }

  ngOnInit(): void {  }


   onLogin(form: UsuarioI[]){
     debugger;
     this.api.loginByUsuario(form).subscribe(data =>{

      console.log(data);
      let dataResponse: responseI = data;

      if(dataResponse.state == 200){
        localStorage.setItem("token",dataResponse.token);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario Verificado, Bienvenido',
          showConfirmButton: false,
          timer: 1500
        })
        switch (dataResponse.rol) {

          case "administrador":
            this.router.navigate(['contAdmin']);
              break;
          case "gestion documental":
            this.router.navigate(['listaRadicado']);
              break;

          default:
              console.log("No existe ese rol de usuario verifique sus credenciales");
              break;
      }

      }else{
        this.errorState = true;
        this.errorMessage = dataResponse.message;

      }
     });

   }

}
