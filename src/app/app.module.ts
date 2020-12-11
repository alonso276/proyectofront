import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

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
import { ReactiveFormsModule } from '@angular/forms';
import { CestaComponent } from './cesta/cesta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { MapaComponent } from './mapa/mapa.component';

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
    MapaComponent,
    ProductorDetalleComponent,
    Error404Component,
    CestaComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXoe3vvdGGosbpLVZqUncQDgiW4UAbl58'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

