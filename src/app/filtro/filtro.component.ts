import { Component, OnInit } from '@angular/core';
import { Productor, ProductoresService } from '../services/productores.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  comarcas: any[];
  categorias: any[];
  arrProductores: Productor[];

  constructor(private productoresService: ProductoresService, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productoresService.getComarca()
      .then(response => this.comarcas = response)
      .catch(error => console.log(error));
    //console.log(this.comarcas);

    this.productosService.getCategory()
      .then(response => this.categorias = response)
      .catch(error => console.log(error));
  }

}

