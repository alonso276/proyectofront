import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './productos.service';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private baseUrl: string;
  carrito: Producto[];
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/carrito';
    this.carrito = [];
  }
  agregarProductoCarrito(pProducto: Producto): Promise<string> {
    return new Promise((resolve, reject) => {
      this.carrito.push(pProducto);
      console.log(this.carrito);
      localStorage.setItem('carrito', JSON.stringify(this.carrito))
      resolve('Producto agregado')
    });
  }
  //Borrar producto del array y actualizar en LOCALSTORAGE
  borrarProductoCarrito(pIndice: number) {
    this.carrito.splice(pIndice, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
  //Este metodo envia el Array (carrito) desde Service a un componente (cesta.ts)
  //if-else: Si tengo productos en LOCALSTORAGE -> recuperamelo - sino: array vacio ('carrito' = clave)
  getArrayCarrito() {
    if (localStorage.getItem('carrito')) {
      this.carrito = JSON.parse(localStorage.getItem('carrito'));
      //console.log(this.carrito);
    } else {
      this.carrito = [];
    }
    return this.carrito;
  }
  //!TBI
  //envia array de cesta a tabla tbi
  addTbiTable(): Promise<Producto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_pf')
      })
    }
    return this.httpClient.post<Producto>(`${this.baseUrl}/compra`, this.carrito, httpOptions).toPromise();
  }
}