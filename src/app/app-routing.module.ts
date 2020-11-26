
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormProductoresComponent } from './form-productores/form-productores.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductorDetalleComponent } from './productor-detalle/productor-detalle.component';
import { TiendaComponent } from './tienda/tienda.component';
<<<<<<< HEAD


=======
>>>>>>> feature_l
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'productores', component: ProductorDetalleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form-usuarios', component: FormUsuariosComponent },
  { path: 'form-productores', component: FormProductoresComponent },
  { path: 'form-productos', component: FormProductoComponent },
  { path: '**', component: Error404Component },
];
<<<<<<< HEAD

=======
>>>>>>> feature_l
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
