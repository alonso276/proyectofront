
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //creo formulario
  formulario: FormGroup;
  //para ver contrasena
  tipoPassword: string;
  //inyecto en constructor
  constructor() {
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
  onSubmit() {
    console.log(this.formulario.value);
    this.formulario.reset();
  }
}