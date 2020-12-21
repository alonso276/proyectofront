import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoresService } from '../services/productores.service';

@Component({
  selector: 'app-form-productores',
  templateUrl: './form-productores.component.html',
  styleUrls: ['./form-productores.component.css']
})

export class FormProductoresComponent implements OnInit {
  //creo formulario
  formulario: FormGroup;
  //?MULTER
  files;



  //inyecto en constructor
  constructor(
    private productoresService: ProductoresService,
    //?MULTER
    private router:Router
    
    ) {
    this.formulario = new FormGroup({
      nombre_empresa: new FormControl('', [
        Validators.required
      ]),
      direccion_produccion: new FormControl('', [
        Validators.required
      ]),
      comarca: new FormControl('', [
        Validators.required
      ]),
      municipio: new FormControl('', [
        Validators.required
      ]),
      provincia: new FormControl('', [
        Validators.required
      ]),
      actividad: new FormControl('', [
        Validators.required
      ]),
      email_empresa: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      telefono_empresa: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d.{8,8}$/)
      ]),
      // imagen: new FormControl('', [
      //   Validators.required
      // ]),
      comentario: new FormControl('', [
        Validators.required
      ])
    })
  }
  ngOnInit(): void {
  }

  // onSubmit() {
  //   //console.log(this.formulario.value);
  //   this.productoresService.create(this.formulario.value)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => console.log(error));
  //   this.formulario.reset();
  // }

  onSubmit() {

    //?MULTER
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre_empresa', this.formulario.value.nombre_empresa);
    fd.append('direccion_produccion', this.formulario.value.direccion_produccion);
    fd.append('comarca', this.formulario.value.comarca);
    fd.append('municipio', this.formulario.value.municipio);
    fd.append('provincia', this.formulario.value.provincia);
    fd.append('actividad', this.formulario.value.actividad);
    fd.append('email_empresa', this.formulario.value.email_empresa);
    fd.append('telefono_empresa', this.formulario.value.telefono_empresa);
    fd.append('comentario', this.formulario.value.comentario);
   
    
    

    // Delegamos el envío del formulario en el servicio
    this.productoresService.createim(fd).then(result => {
      this.formulario.reset();
      alert('Formulario enviado correctamente')
      this.router.navigate(['']);
    })
  }

  //?MULTER
  onChange($event) {
    
    this.files = $event.target.files;
    // console.log(this.files)
  }
  
}
