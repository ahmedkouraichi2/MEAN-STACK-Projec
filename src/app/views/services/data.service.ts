import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token :any = localStorage.getItem('token')
  
  constructor() { }

  getAllstudents(){}

  addstudent(profile:any){}

  deletestudent(id:any){}

  updateStudent(id:string,newprofile:any){}

  getOnestudent(id:any){}

}
