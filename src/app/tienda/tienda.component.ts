
//VIENE DE CAROUSEL

import { Component, OnInit } from '@angular/core';
import { Productor, ProductoresService } from '../services/productores.service';
import { Producto, ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productores: Productor[];
  productoresCat: Productor[];
  comarcas: any[];
  comarcasSinRepetir: any[];
  categorias: any[];
  categoriasSinRepetir: any[];
  productos: Producto[];

  constructor(private productoresService: ProductoresService, private productosService: ProductosService) {
    this.comarcas = [];
    this.categorias = [];
  }

  ngOnInit(): void {
    this.productoresService.getAll()
      .then(response => {
        this.productores = response;
      })
      .catch(error => console.log(error));

    this.productoresService.getComarca()
      .then(response => {
        this.comarcas = response;
        this.comarcas = this.comarcas.map(item => item.comarca)
        const data = new Set(this.comarcas);
        this.comarcasSinRepetir = [...data];
        console.log(this.comarcasSinRepetir);
      })
      .catch(error => console.log(error));
    //console.log(this.comarcas);

    this.productosService.getCategory()
      .then(response => {
        this.categorias = response;
        this.categorias = this.categorias.map(item => item.categoria)
        const data = new Set(this.categorias);
        this.categoriasSinRepetir = [...data];
        console.log(this.categoriasSinRepetir);
      })
      //.then(response => this.categorias = response)
      .catch(error => console.log(error));

  }

  //MUESTAR PRODUCTORES POR COMARCA
  async onChange($event) {
    if ($event.target.value === 'todas') {
      this.productores = await this.productoresService.getAll();
    } else {
      this.productores = await this.productoresService.getByComarca($event.target.value);
    }
    //console.log(this.productores);
    //console.log($event.target.value);
  }

  //MUESTAR PRODUCTORES POR CATEGORIA DE PRODUCTOS
  async onChangeCat($event) {
    if ($event.target.value === 'todos') {
      this.productoresCat = await this.productoresService.getAll();
    } else {
      this.productoresCat = await this.productoresService.getByCategory($event.target.value);
    }
    //console.log(this.productoresCat);
    //console.log($event.target.value);
  }

  //MUESTRA PRODUCTOS POR CATEGORIA DE PRODUCTOS
  async onChangeCatProd($event) {
    if ($event.target.value === 'todos') {
      this.productos = await this.productosService.getAll();
    } else {
      this.productos = await this.productosService.getByCategory($event.target.value);
    }
    //console.log(this.productos);
    //console.log($event.target.value);
  }

  async onClickProductorId(pProductorId: number) {
    this.productos = await this.productosService.getByProductorId(pProductorId);
    //console.log(this.productos);
  }

  async onClickProductComarca(pComarca: string) {
    this.productos = await this.productosService.getByProductComarca(pComarca);
    //console.log(this.productos);
  }
}