import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';
import { AddstudentModule } from '../addstudent/addstudent.module';
import { AllstudentsComponent } from '../allstudents/allstudents/allstudents.component';
import { LoginAdminComponent } from '../login-admin/login-admin/login-admin.component';
import { DashbordComponent } from './dashbord.component';

const routes: Routes = [
  {path:"allstudents",component:AllstudentsComponent},
  {path:"admin/dashboard",component:DashbordComponent},
  {path:"admin/allstudents",component:AllstudentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
