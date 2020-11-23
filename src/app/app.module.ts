import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TiendaComponent } from './tienda/tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapaComponent,
    FiltroComponent,
    CalendarioComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
