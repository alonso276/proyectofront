import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Productor {
  id: number;
  nombre_empresa: string;
  provincia: string;
  comarca: string;
  municipio: string;
  actividad: string;
  direccion_produccion: string;
  email_empresa: string;
  telefono_empresa: number;
  imagen: string;
  comentario: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/productores';
  }

  create(formValues): Promise<Productor> {
    return this.httpClient.post<Productor>(`${this.baseUrl}/registro`, formValues).toPromise();
  }

  getAll(): Promise<Productor[]> {
    //const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Authorization': localStorage.getItem('token_gym')
    //  })
    // }
    // return this.httpClient.get<Cliente[]>(this.baseUrl, httpOptions).toPromise();

    return this.httpClient.get<Productor[]>(`${this.baseUrl}/all`).toPromise();
  }

  //Recupera las comarcas
  getComarca(): Promise<string[]> {
    return this.httpClient.get<string[]>(`${this.baseUrl}/comarca`).toPromise();
  }

  //Recupera productores por comarcas
  getByComarca(pComarca: string): Promise<Productor[]> {
    return this.httpClient.get<Productor[]>(`${this.baseUrl}/com/${pComarca}`).toPromise();
  }

  //Recupera productores por categoria de productos
  getByCategory(pCategoria: string): Promise<Productor[]> {
    return this.httpClient.get<Productor[]>(`${this.baseUrl}/cat/${pCategoria}`).toPromise();
  }

}
