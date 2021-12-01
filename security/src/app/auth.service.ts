import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  signin(data){
    return this.http.post('http://localhost:8080/api/auth/signin',data)
  }
  signup(data){
    return this.http.post('http://localhost:8080/api/auth/signup',data)
  }

  getInfo(){ 

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  localStorage.getItem('mytoken'), 
      })
    };

    return this.http.get('http://localhost:8080/api/auth/info', httpOptions)
  }
  
}
