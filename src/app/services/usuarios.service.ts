import{ HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Usuario{

  nombre:string,
  apellidos:string,
  email:string,
  contraseña:string,
  direccion:string,
  telefono:number,
  perfil:string,


}

@Injectable({
  providedIn: 'root'
})



export class UsuariosService {



  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
             
    this.baseUrl='http://localhost:3000/api/usuarios';


  }

  //!datos que va a pasar desde form para crear nuevo usuario
  registro(formValues):Promise<Usuario>{
  return this.httpClient.post<Usuario>(`${this.baseUrl}/registro`, formValues).toPromise();
 }

}

