import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  //creo formulario
  formulario: FormGroup;
  //inyecto en constructor
  constructor(private productosService: ProductosService) {
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
      imagen: new FormControl('', [
        Validators.required
      ]),
    })
  }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.productosService.create(this.formulario.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
    this.formulario.reset();
  }
}



