import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
 
  profileAdmin ={
    username : "",
    role :""

  }

  isLoggedIn : boolean = false ;
   helper = new JwtHelperService()

  constructor(private http :HttpClient) { }

  login(data : any){
     return this.http.post('http://localhost/3000/admin',data)
  }

  saveDataProfil(token : any ,username :any , role : any){
    localStorage.setItem('token',token)
    this.profileAdmin.username = username 
    this.profileAdmin.role = role ;
     this.isLoggedIn = true ; 

  }

  saveOutProf(token :any,role :any){
    let decodeToken = this.helper.decodeToken(token);
   localStorage.setItem('token',token)
   // console.log(decodeToken);
   localStorage.setItem('username',decodeToken.username);
   localStorage.setItem('role',role)
  }


  getUsername(){
    let token:any = localStorage.getItem('token')
    let decodeItem = this.helper.decodeToken(token)
    return decodeItem.username
  }

  LoggedIn(){
     let token : any = localStorage.getItem('token')
     let decodeToken = this.helper.decodeToken(token)
     let role = decodeToken.role 
       if(role == 'ADMIN')
       {
        return false 
       }

       if(this.helper.isTokenExpired(token)){
         return false
       }

       return true
     
  }
}
