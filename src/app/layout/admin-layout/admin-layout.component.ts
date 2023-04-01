import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
 username :any ;
  constructor(private ds :AuthadminService) { 
     this.username = this.ds.getUsername();
     if(this.ds.LoggedIn() == true){
       console.log("connected ")
     }
     else{
       console.log('not connected ');
     }
    /*   */
  }

  ngOnInit(): void {
  }
  logout(){
    

  }

}
