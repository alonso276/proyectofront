import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//? 2.importamos el servicio de usuario
import{ UsuariosService} from '../services/usuarios.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // //?5.añadimos mensaje error
   mensajeError:string;
  //creo formulario
  formulario: FormGroup;
  //para ver contrasena
  tipoPassword: string;

  //inyecto en constructor
  constructor(

    //? 3.inyectamos servicio en el constructor
    private usuariosService:UsuariosService,
    private router:Router
    

  ) {

    this.tipoPassword = 'password';

    this.formulario = new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      contraseña: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9]{4,8}$/)
        //Validators.pattern(/^(?=.*\d).{4,8}$/) //Entre 4 y 8 (solo) digitos
      ])

    });

  }

  ngOnInit(): void {
  }

  //ver contrasena
  onClick($event) {
    $event.preventDefault();
    if (this.tipoPassword === 'text') {
      this.tipoPassword = 'password';
    } else {
      this.tipoPassword = 'text';
    }
    //equivale: this.tipoPassword = (this.tipoPassword == 'text') ? 'password' : 'text';
  }



  //Provisional Prueba

  onSubmit(){

    // console.log(formValues);
    this.mensajeError=null;

    this.usuariosService.login(this.formulario.value)

    .then(response=>{
      // console.log(response)
      if (response['error']) {
        this.mensajeError= response['error']

      }else{
        //console.log(response['token']);
        localStorage.setItem('token_pf', response['token']);
        this.router.navigate(['/inicio']);
      }
    })

     .catch(error=> console.log(error));
      this.formulario.reset();
      alert('Login realizado correctamente');
      this.router.navigate(['']);
  }
}

