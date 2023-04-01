import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {
   
  dataReceived : any ;

  constructor(private and : AuthadminService,private router :Router) {
    console.log(this.and.LoggedIn());
   }

  ngOnInit(): void {
  }


      loginadmin(f:any){
        let data = f.value ;
        this.and.login(data).subscribe(response =>{ 
          //
        
          this.dataReceived = response ;
          this.and.saveDataProfil(this.dataReceived.token,this.dataReceived.username,this.dataReceived.role )
           this.router.navigate(['/admin']);
        }
        )
         // err => console.log(err);
        ;
      }

    
     
    
  


}

export interface typeResponse{
    token : any ;
    username : string ;
    role : string ; 
  }
