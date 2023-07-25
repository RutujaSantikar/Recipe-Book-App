import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signup(email:string, password:string) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBCNArz5VTErK2sx4IogWo4az_CtAaw9tA', {
      email: email,
      password: password,
      returnSecureToken:true
     })
   }
}
