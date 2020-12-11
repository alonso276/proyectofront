import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ProductoresService } from '../services/productores.service';
@Component({
  selector: 'app-form-productores',
  templateUrl: './form-productores.component.html',
  styleUrls: ['./form-productores.component.css']
})
export class FormProductoresComponent implements OnInit {

//creo formulario
formulario: FormGroup;
//inyecto en constructor
constructor( private productoresService: ProductoresService) {
  this.formulario = new FormGroup({
    nombre_empresa: new FormControl('',[
      Validators.required
    ]),

    direccion_produccion: new FormControl('',[
      Validators.required
    ]),
    comarca: new FormControl('',[
      Validators.required
    ]),
    municipio: new FormControl('',[
      Validators.required
    ]),
    provincia: new FormControl('',[
      Validators.required
    ]),
    actividad: new FormControl('',[
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
    imagen:new FormControl('',
    [
      Validators.required]),


    comentario: new FormControl('',
    [
      Validators.required]),
   
  })
}
ngOnInit(): void {
}
//Provisional Prueba
onSubmit() {

    //  console.log(this.formulario.value);
  
    
    //console.log(this.formulario.value)
    this.productoresService.create(this.formulario.value)
      .then(response => {
        // console.log(response);

      
    })
      .catch(error => console.log(error));
      this.formulario.reset();
  }

}

