import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FiltroComponent } from './filtro/filtro.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductosComponent } from './productos/productos.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormProductoresComponent } from './form-productores/form-productores.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { LoginComponent } from './login/login.component';
import { ProductorDetalleComponent } from './productor-detalle/productor-detalle.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltroComponent,
    CalendarioComponent,
    TiendaComponent,
    ProductosComponent,
    FormUsuariosComponent,
    FormProductoresComponent,
    FormProductoComponent,
    LoginComponent,
    ProductorDetalleComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
