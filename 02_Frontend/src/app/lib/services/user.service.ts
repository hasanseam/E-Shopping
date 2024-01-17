import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = location.protocol + '//' + location.hostname + ':3000';
  constructor(private http:HttpClient) { }

  registerUser(user:User){
       return this.http.post<any>(
        this.url+`/users/register`,user,{responseType:'text' as 'json'} 
       )
  }
  
}

//TODO move into separate file
export interface User{
  firstname:string,
  lastname:string,
  email:string,
  password:string
}
