
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormProductoresComponent } from './form-productores/form-productores.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProcedimientoComponent } from './procedimiento/procedimiento.component';
import { ProductorDetalleComponent } from './productor-detalle/productor-detalle.component';
import { RegistroProductoGuard } from './registro-producto.guard';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'productores', component: ProductorDetalleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormUsuariosComponent },
  { path: 'productores/nuevo', component: FormProductoresComponent },
  { path: 'productos/nuevo', component: FormProductoComponent, canActivate:[RegistroProductoGuard] },
  {path:'inicio/registro/procedimiento',  component:ProcedimientoComponent},
  { path: 'perfil', component: PerfilComponent,canActivate:[LoginGuard]},
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
