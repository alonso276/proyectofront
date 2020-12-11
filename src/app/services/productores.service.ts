import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

export interface Productor{
  
  id:number;
  nombre_empresa:string,
  provincia:string,
  comarca:string,
  municipio:string,
  actividad:string,
  direccion_produccion:string,
  email_empresa:string,
  telefono_empresa:number,
  imagen:string,
  comentario:string,
  


}

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  private baseUrl: string;

   constructor(private httpClient: HttpClient) { 
             
    this.baseUrl='http://localhost:3000/api/productores';


  }
   //!datos que va a pasar desde form para crear nuevo productor
   create(formValues):Promise<Productor>{
    return this.httpClient.post<Productor>(`${this.baseUrl}/registro`, formValues).toPromise();
   }


   //!recuperar todos los productores
getAll():Promise<Productor[]>{
   
  //cabecera
  // const httpOptions= { 

    // headers:new HttpHeaders({
                      //recupero token del localStorage
  //     'Authorization': localStorage.getItem('token_gym')
  //   })

  // };

  return this.httpClient.get<Productor[]>(`${this.baseUrl}/all`).toPromise();
}


    //!recuperar las comarcas

    getComarca():Promise<string[]>{
   
  return this.httpClient.get<string[]>(`${this.baseUrl}/comarca`).toPromise();

  
}

//! recuperar productores por comarca
 getByComarca(pComarca:string):Promise<Productor[]>
 {
   
  return this.httpClient.get<Productor[]>(`${this.baseUrl}/com/${pComarca}`).toPromise();
}

//! recuperar productores por categoría de productos
  getByCategory(pCategoria):Promise<Productor[]>

{
 
  return this.httpClient.get<Productor[]>(`${this.baseUrl}/cat/${pCategoria}`).toPromise();
}






}  



