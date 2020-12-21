import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductoresService } from './services/productores.service';
@Injectable({
  providedIn: 'root'
})
export class RegistroProductoGuard implements CanActivate {
  //creo constructor e inyecto
  constructor(
    private productoresService: ProductoresService,
    private router: Router
  ) { }
  //compruebo si es productor
  //redirijo
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      
    const response = await this.productoresService.getProductorRegistro()
    console.log(response);
    if (response['productor'] == 1) {
      return true;
    } else {
      alert('Primero has de registrarte como Productor para poder ingresar Productos.')
      this.router.navigate(['inicio/registro/procedimiento']);
      return false;
    }
  }
}