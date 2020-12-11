import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

export interface Producto{

  categoria:string,
  nombre:string,
  cantidad:string,
  precio:number,
  certificado:string,
  imagen:string,


}

@Injectable({
  providedIn: 'root'

})
export class ProductosService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) { 
            
   this.baseUrl='http://localhost:3000/api/productos';

 }

  //!datos que va a pasar desde form para crear nuevo producto
  
  create(formValues):Promise<Producto>{
    return this.httpClient.post<Producto>(`${this.baseUrl}/registro`, formValues).toPromise();
   }



   getAll():Promise<Producto[]>{
   
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/all`).toPromise();
  }


  //!recuperar las categorias de productos

  getCategory():Promise<string[]>{
   
    return this.httpClient.get<string[]>(`${this.baseUrl}/categoria`).toPromise();

  }

   //!recuperar los productos por categoria

 getByCategory(pCategoria:string):Promise<Producto[]>
 {
  return this.httpClient.get<Producto[]>(`${this.baseUrl}/cat/${pCategoria}`).toPromise();
}


//!recuperar los productor por productorID
  getByProductorId(pProductorId:number):Promise<Producto[]>
  {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/from/${pProductorId}`).toPromise();
  }


//! recuperar los productos por comarca
getByProductComarca(pComarca:string):Promise<Producto[]>
{
  return this.httpClient.get<Producto[]>(`${this.baseUrl}/com/${pComarca}`).toPromise();
}



}