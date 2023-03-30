import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component'
import { DashbordModule } from './views/admin/dashbord/dashbord.module';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';

const routes: Routes = [


  {path:'admin/login',component:AuthAdminLayoutComponent},

   {path:"" ,component :FrontLayoutComponent ,children : [
       {path:'',loadChildren:()=> import('../app/views/front/home/home.module').then(m => m.HomeModule)},
       {path:'loginuser',loadChildren:()=> import('../app/views/front/loginuser/loginuser.module').then(m => m.LoginuserModule)},
       {path:'register',loadChildren:()=> import('../app/views/front/register/register.module').then(m => m.RegisterModule)},
   ]},


   {path :"admin",component:AdminLayoutComponent,children:
      [
          {path:'',loadChildren:()=>import('../app/views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
          {path:'dashbord',loadChildren:()=>import('../app/views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
          {path :"loginadmin",loadChildren:() => import('../app/views/admin/login-admin/login-admin.module').then(m=> m.LoginAdminModule)},
          {path:'addstudent',loadChildren:()=>import('./views/admin/addstudent/addstudent.module').then(m=>m.AddstudentModule)},

  ]},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
