import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getProductsList(){
    return this.http.get(environment.api+'/products/list');
   }
 
   getDeposList(){
    return this.http.get(environment.api+'/depots/list');
   }
 

   findProductById(id){
     return this.http.get(environment.api+'/products/find-by-id/'+id)
   }
    

  addNewProduct(data){
    return this.http.post(environment.api+'/products/add',data)
  }


  updateProduct(data,id){
    return this.http.post(environment.api+'/products/update/'+id,data)
  }



  getClientsList(){
    return this.http.get(environment.api+'/clients/list');
   }



   addNewClient(data){
    return this.http.post(environment.api+'/clients/add',data)
   }
}
