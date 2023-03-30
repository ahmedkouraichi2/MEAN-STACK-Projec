import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  messageErr = "" ;

  constructor(private ds :DataService,private route :Router) {

   }

  ngOnInit(): void {
  }

  add(f:any){
      // console.log(f.value);
      //let data = f.value ;
     // this.ds.addstudent(data).subscribe(response =>{
      //    console.log(response) ;
         // this.route.navigate(['/admin/allstudents'])
     // },(err :HttpErrorResponse) =>{
      //  this.messageErr =  err.error ;

      }


  }


