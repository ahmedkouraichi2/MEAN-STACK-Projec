import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   students : any[] =[
    {
      id:1,
      firstname:'ahmed',
      lastname :'kouraichi',
      age : 31,
      phone :5559850,
      email: 'kouraichiahmed2@gmail.com'
    
    },
    {
      id:2,
      firstname:'lasssad',
      lastname :'kouraichi',
      age : 31,
      phone :5559850,
      email: 'lassad2@gmail.com'
    }

  ];

   
  token :any = localStorage.getItem('token')

  constructor(private http:HttpClient) { }

  getAllstudents(){
  // return this.http.get('http://localhost:3000/students');
   return this.students ;
  }


  addstudent(profile : any){
     return this.http.post('http://localhost:300/addstudent',profile) ;

  }



  deletestudent(id:any){
    return this.http.delete('http://localhost:3000/students/' + id );
  }

  updateStudent(id:string,newprofile:any){}

  getOnestudent(id:any){}

}
