import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapaComponent,
    FiltroComponent,
    CalendarioComponent,
    TiendaComponent,
    ProductosComponent,
    FormUsuariosComponent,
    FormProductoresComponent,
    FormProductoComponent,
    LoginComponent,
    ProductorDetalleComponent,
    Error404Component,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXoe3vvdGGosbpLVZqUncQDgiW4UAbl58'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
