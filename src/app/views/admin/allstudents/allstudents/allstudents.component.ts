import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

  dataArray :any[]  = [];
  dataStudent={
    firstname:'',
    lastname:'',
    email:'',
    age:0,
    phone:0,
    id:'',
  }
  constructor(private ds :DataService) {
     
        

        
  }

  ngOnInit(): void {
        this.dataArray = /*  this.ds.getAllstudents();
        console.log(this.dataArray) ; */
        [
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
  }

  delete(id : any){
    return this.ds.deletestudent(id).subscribe(response =>  console.log(response));
    this.dataArray.splice(id,1);

  }

  getdata(firstname:string,lastname:string,age:number,phone:number,email:string){
      this.dataStudent.firstname = firstname;
      this.dataStudent.lastname = lastname;
       this.dataStudent.age = age ;
      this.dataStudent.phone = phone ;
      this.dataStudent.email = email ;
       console.log(this.dataStudent)
  }

}
