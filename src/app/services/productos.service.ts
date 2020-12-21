import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Producto {
  categoria: string;
  nombre: string;
  cantidad: string;
  precio: number;
  certificado: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/productos';
  }

  create(formValues): Promise<Producto> {
    console.log(formValues);
    return this.httpClient.post<Producto>(`${this.baseUrl}/registro`, formValues).toPromise();
  }

  getAll(): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/all`).toPromise();
  }

  //Recupera las categorias de productos
  getCategory(): Promise<string[]> {
    return this.httpClient.get<string[]>(`${this.baseUrl}/categoria`).toPromise();
  }

  //Recupera productos por categoria de productos
  getByCategory(pCategoria: string): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/cat/${pCategoria}`).toPromise();
  }

  //Recupera productos por productor (id)
  getByProductorId(pProductorfkUsuario: number): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/from/${pProductorfkUsuario}`).toPromise();
  }

  //Recupera productos por comarca
  getByProductComarca(pComarca: string): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/com/${pComarca}`).toPromise();
  }

  //?MULTER
  createim(fd: FormData) {
    const httpOptions = {
     headers: new HttpHeaders({
     'Authorization': localStorage.getItem('token_pf')
      })
     }
    return this.httpClient.post(`${this.baseUrl}/registro`, fd,httpOptions).toPromise();
  }

  

}
