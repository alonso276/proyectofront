import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

export interface Usuario {
  nombre: string;
  apellidos: string;
  email: string;
  contraseña: string;
  direccion: string;
  telefono: number;
  perfil: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  registro(formValues): Promise<Usuario> {
    return this.httpClient.post<Usuario>(`${this.baseUrl}/registro`, formValues).toPromise();
  }


  
  //?1.método login--replico la petición del back

  login(formValues){
    return this.httpClient.post(`${this.baseUrl}/login`, formValues).toPromise();
   }

   isLogged():boolean{

    if(localStorage.getItem('token_pf')){
      return true;

    }else
    return false;
   }

  //  /?Descodificar Token
    recuperarUsuario() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token_pf'));
        console.log(decodedToken);
    return decodedToken;
        }

}
