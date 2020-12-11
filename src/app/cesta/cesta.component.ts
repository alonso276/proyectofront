import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  productos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    //PRUEBA MARIO TOOLTIP
    //$(document).ready(function () {
    //  $('[data-toggle="tooltip"]').tooltip();
    //});

    this.productosService.getAll()
      .then(response => {
        this.productos = response;
      })
      .catch(error => console.log(error));
  }


}

