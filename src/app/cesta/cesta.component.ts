import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { Producto } from '../services/productos.service';
import { Usuario, UsuariosService } from '../services/usuarios.service';
@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  //productos: Producto[];
  arrCarrito: Producto[];
  muestraLista: boolean;
  constructor(

    private carritoService: CarritoService,
    private router: Router,
    //para poder usar en html (public)
    public usuariosService: UsuariosService
  ) {
    this.arrCarrito = [];
    this.muestraLista = false;
  }
  ngOnInit(): void {
    
    //Recibo Array desde carrito.service
    this.arrCarrito = this.carritoService.getArrayCarrito();
    //console.log(this.arrCarrito);
    this.usuariosService.recuperarUsuario();
    
  }
  //Borra producto y manda mensaje de confirmación (boolean)
  onClickBorrarProducto(pIndice: number) {
    const alerta = confirm('Estas seguro que quieres borrar el producto?');
    if (alerta === true) {
      this.carritoService.borrarProductoCarrito(pIndice);
    }
  }
  onClickAgregarProducto(pProducto: Producto) {
    this.carritoService.agregarProductoCarrito(pProducto);
  }
  calcularSubTotal() {
    let resultado: number = 0;
    for (let producto of this.arrCarrito) {
      resultado += producto.precio;
    }
    return resultado;
  }
  calcularIva() {
    let iva: number = 0;
    let resultado: number = 0;
    for (let producto of this.arrCarrito) {
      resultado += producto.precio;
      iva = resultado * 0.04;
    }
    return iva;
  }
  calcularTotal() {
    let total: number = 0;
    let iva: number = 0;
    let resultado: number = 0;
    for (let producto of this.arrCarrito) {
      resultado += producto.precio;
      iva = resultado * 0.04;
      total = resultado + iva;
    }
    return total;
  }
  //ocultar lista cesta en /tienda
  ocultarLista() {
    this.muestraLista = !this.muestraLista;
  }
  //! TBI
  sendCarrito() {

    if(localStorage.getItem('token_pf')){

         this.carritoService.addTbiTable();
         localStorage.removeItem('carrito');
         alert('Su compra se ha realizado correctamente.[Elementos insertados en tabla tbi');
         

    }else{
        alert('Has de registrarte como Usuario y logarte para poder realizar tu compra')
    }
        this.router.navigate(['/inicio']);

  }
}
