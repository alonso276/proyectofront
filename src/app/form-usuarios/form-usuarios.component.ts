import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {

  //creo formulario
  formulario: FormGroup;
  //para ver contrasena
  tipoPassword: string;
  //inyecto en constructor
  constructor() {

    this.tipoPassword = 'password';

    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      contraseña: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)
      ]),
      direccion: new FormControl(),
      telefono: new FormControl('', [
        Validators.pattern(/^\d.{8,8}$/)
      ]),
      perfil: new FormControl(),
    })
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
