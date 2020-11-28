import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {

  //creo formulario
  formulario: FormGroup;
  //inyecto en constructor
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      contraseña: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      perfil: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onChange() {

  }

  //Provisional Prueba
  onSubmit() {
    console.log(this.formulario.value);
    this.formulario.reset();
  }

}
