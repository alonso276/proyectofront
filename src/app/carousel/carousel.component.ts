import { Component, OnInit } from '@angular/core';
import { Productor, ProductoresService } from '../services/productores.service';
import { Producto, ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  productores:Productor[];
  productos: Producto[];
  // productoresCat: Productor[];
  
  comarcas:any[];
  comarcasSinRepetir:any[];

  municipios:any[];
  municipiosSinRepetir:any[]

  categorias:any[]
  categoriasSinRepetir:any[];
  

  constructor(
     private productoresService:ProductoresService,
     private productosService:ProductosService
  ) { 
    this.comarcas=[];
    this.municipios=[];
    this.categorias=[];
  }

  ngOnInit(): void {

     console.log('test')
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
        // console.log(this.comarcasSinRepetir);
      })
      .catch(error => console.log(error));


      this.productoresService.getMunicipio()
      .then(response => {
        this.municipios = response;
        this.municipios = this.municipios.map(item => item.municipio)
        const data = new Set(this.municipios);
        this.municipiosSinRepetir = [...data];
        // console.log(this.comarcasSinRepetir);
      })
      .catch(error => console.log(error));



      // Método de producto--to delete in near future
        this.productosService.getAll()
        .then(response => {
          this.productos = response;
        })
        .catch(error => console.log(error));
        

                //métodos de productos--getcategory()
        this.productosService.getCategory()
        .then(response => {
          this.categorias = response;
          this.categorias = this.categorias.map(item => item.categoria)
          const data = new Set(this.categorias);
          this.categoriasSinRepetir = [...data];
          console.log(this.categoriasSinRepetir);
        })
        .catch(error => console.log(error));

        //fin to delete in near future
        
       


    }

    async onChange($event) {
      if ($event.target.value === 'todas') {
        this.productores = await this.productoresService.getAll();
      } else {
        this.productores = await this.productoresService.getByComarca($event.target.value);
      }
      //console.log(this.arrProductos);
      //console.log($event.target.value);
    }

    

    async onChangeCat($event) {
      if ($event.target.value === 'todos') {
        this.productores = await this.productoresService.getAll();
      } else {
        this.productores = await this.productoresService.getByCategory($event.target.value);
      }
      // console.log(this.productores);
      // console.log($event.target.value);
    }



    async onChangeCatProd($event) {
      if ($event.target.value === 'todos') {
       this.productos = await this.productosService.getAll();
    } else {
      this.productos = await this.productosService.getByCategory($event.target.value);
      }
    }


    async onChangeMunProd($event){

      if ($event.target.value === 'todos') {
        this.productores = await this.productoresService.getAll();
     } else {
       this.productores = await this.productoresService.getByMunicipio($event.target.value);
       }
     }

    


     async onClickProductorId(pProductorId: number){

      this.productos = await this.productosService.getByProductorId(pProductorId);
      // console.log(this.productos)

  
     }


     async onClickProductComarca(pComarca:string){

      this.productos = await this.productosService.getByProductComarca(pComarca)
      
     }
  }




