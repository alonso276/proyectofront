import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  //creo formulario
  formulario: FormGroup;
  //?MULTER
  files;

  //inyecto en constructor
  constructor(
  private productosService: ProductosService,
  //?MULTER
  private router: Router
  ){
    this.formulario = new FormGroup({
      categoria: new FormControl('', [
        Validators.required
      ]),
      nombre: new FormControl('', [
        Validators.required
      ]),
      cantidad: new FormControl('', [
        Validators.required
      ]),
      precio: new FormControl('', [
        Validators.required
      ]),
      certificado: new FormControl('', [
        Validators.required
      ]),
      // imagen: new FormControl('', [
      //   Validators.required
      // ]),
    })
  }
  ngOnInit(): void {
  }

  onSubmit() {

    //?MULTER
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('categoria', this.formulario.value.categoria);
    fd.append('nombre', this.formulario.value.nombre);
    fd.append('cantidad', this.formulario.value.cantidad);
    fd.append('precio', this.formulario.value.precio);
    fd.append('certificado', this.formulario.value.certificado);
   
    
    

    // Delegamos el envío del formulario en el servicio
    this.productosService.createim(fd).then(result => {
      this.formulario.reset();
      alert('Formulario enviado correctamente')
      this.router.navigate(['']);
    })
  }

  //?MULTER
  onChange($event) {
    
    this.files = $event.target.files;
    console.log(this.files)
  }

}




