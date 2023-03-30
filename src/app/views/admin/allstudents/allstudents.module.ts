import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllstudentsRoutingModule } from './allstudents-routing.module';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AllstudentsComponent
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule,
    HttpClientModule
  ]
})
export class AllstudentsModule { }
