import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  ngOnInit() {
    //console.log($);
  }
  isLogged(): boolean {
    if (localStorage.getItem('token_pf')) {
      return true;
    } else {
      return false;
    }
  }
  onClickLogout() {
    localStorage.setItem('token_pf', '');
    this.router.navigate(['/inicio']);
  }

  // /para deshabilitar opciones del select del nav Registro en header
  isLoggedProductor(): boolean {
    if (localStorage.getItem('token_pf')) {
      return true;
    } else {
      window.alert("Primero has de registrarte como Usuario para ser Productor");
      this.router.navigate(['/inicio/registro/procedimiento']);
      return false;
    }
  }
  isLoggedProductor2(): boolean {
    if (localStorage.getItem('token_pf')) {
      return true;
    } else {
      window.alert("Primero has de registrarte como Productor para añadir Productos");
      this.router.navigate(['/inicio/registro/procedimiento']);
      return false;
    }
  }

}